import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Search from "../../icon/Search";
import { Input } from "../../ui";
import s from "./Searchbar.module.css";
import cn from "clsx";

const Searchbar = ({ className, id = "search" }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/search");
  }, [router]);

  return (
    <div className={cn(s.root, className)}>
      <Input
        id={id}
        defaultValue={router.query.q}
        placeholder="Enter the city"
      />
      <div className={s.iconContainer}>
        <Search className={s.icon} />
      </div>
    </div>
  );
};

export default Searchbar;
