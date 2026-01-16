'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from './index.module.scss';

type StatusType = "Planned" | "InProgress" | "Defer" | "Done" | "QA" | "Blocked";

interface FILE_ITEM {
  title: string;
  level: number;
  url?: string;
  status: StatusType;
  completDate?: string;
  updateDate?: string;
  note?: string[];
}

interface FILE_LIST {
  category: string;
  list: FILE_ITEM[];
}

export default function PublishList(): JSX.Element{
  const FILE_LIST_DATA: FILE_LIST_TYPE[] = [
    {
      category: 'COMMON',
      list: [
        {
          id: 'common_1',
          title: 'assets',
          level: 1,
          url: '/index.html',
          status: 'Planned',
          completedDate: '2025-12-25',
          updateDate: '2025-12-30',
          note: ['테스트'],
        },
        {
          id: 'common_2',
          title: 'UI Components',
          level: 1,
          url: '/index.html',
          status: 'InProgress',
          completedDate: '2025-12-25',
          updateDate: '2025-12-30',
          note: ['테스트 테스트 테스트테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트테스트 테스트 테스트 테스트테스트 ㅍ 테스트 테스트테스트테스트테스트 테스트 테스트 테스트']
        },
        {
          id: 'common_3',
          title: 'test',
          level: 2,
          url: '/test.html',
          status: 'Done',
          completedDate: '2025-12-25',
          updateDate: '2025-12-30',
          note: '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트'
        },
        {
          id: 'common_4',
          title: 'test',
          level: 2,
          url: '/test.html',
          status: 'Done',
          completedDate: '2025-12-25',
          updateDate: '2025-12-30',
          note: ['12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890']
        }
      ]
    }
  ]

  const [clampMap, setClampMap] = useState<Record<string,boolean>>({});

  const handleClamp = (id: string): void => {
    setClampMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <section className={styles["container"]}>
        <h1 className="sr-only">Publish Files</h1>

        {PublishData.map((data, idx) => (
          <article className={styles["wrapper"]} key={`cate_${idx}`}>
            <h2 className={styles["stile"]}>{data.category}</h2>
            <ul className={styles["list"]}>
              {data.list.map((item, index) => (
                <li className={`${styles["item_level_" + item.level]}`}>
                  <h3 className={styles["item-title"]}>{item.title}</h3>
                  <div className={styles["item-content"]}>
                    <p className={`${styles["item-status"]} ${styles[item.status]}`}>
                      {item.status === "InProgress" ? "In Progress" : item.status}
                    </p>
                    <Link className={styles["item-link"]} href={`${item.url}`} target="_blank">
                      {item.url}
                    </Link>
                    {item.completDate && (
                      <p>
                        Completed Date : <time data-time="">{item.completDate}</time>
                      </p>
                    )}
                    {item.updateDate && (
                      <p>
                        Update Date : <time>{item.updateDate}</time>
                      </p>
                    )}
                    {item.note && (
                      <div className={styles["item-note"]}>
                        Note : <p>{item.note}</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  )
}



