"use client";

import React, { useEffect, Suspense } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "loading") {
      return;
    }
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [router, session.status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <Suspense>
        <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading
              ? "loading"
              : data?.map((post) => (
                  <div className={styles.post} key={post._id}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={post.img}
                        alt=""
                        width={200}
                        height={100}
                        sizes="100%"
                        priority
                      />
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <button
                      className={styles.delete}
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <form className={styles.new} onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <input type="text" placeholder="Title" className={styles.input} />
            <input type="text" placeholder="Desc" className={styles.input} />
            <input type="text" placeholder="Image" className={styles.input} />
            <textarea
              placeholder="Content"
              className={styles.textArea}
              cols="30"
              rows="10"
            ></textarea>
            <button className={styles.button}>Send</button>
          </form>
        </div>
      </Suspense>
    );
  }
};

export default Dashboard;
