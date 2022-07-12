import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Search from "../../icon/Search";
import { Input } from "../../ui";
import s from "./Searchbar.module.css";
import cn from "clsx";

const Searchbar = ({ className, id = "search" }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/forecast");
  }, [router]);
  const handleKeyUp = (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
      const q = e.currentTarget.value;

      router.push(
        {
          pathname: `/forecast`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      );
    }
  };
  return (
    <div className={cn(s.root, className)}>
      <Input
        id={id}
        defaultValue={router.query.q}
        placeholder="Введите город или район"
        onKeyUp={handleKeyUp}
      />
      <div className={s.iconContainer}>
        <Search className={s.icon} />
      </div>
    </div>
  );
};

export default Searchbar;
