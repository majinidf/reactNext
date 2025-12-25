'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from './index.module.scss';

export type StatusType = 
  | 'Planned'
  | 'InProgress'
  | 'QA'
  | 'Blocked'
  | 'Done';
;

export interface FILE_ITEM {
  id: string;
  title: string;
  level: number;
  url: string;
  status: StatusType;
  completedDate?: string;
  updateDate?: string;
  note?: string;
}

export interface FILE_LIST_TYPE {
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
          note: '테스트'
        },
        {
          id: 'common_2',
          title: 'UI Components',
          level: 1,
          url: '/index.html',
          status: 'InProgress',
          completedDate: '2025-12-25',
          updateDate: '2025-12-30',
          note: '테스트 테스트 테스트테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트테스트 테스트 테스트 테스트테스트 ㅍ 테스트 테스트테스트테스트테스트 테스트 테스트 테스트'
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
          note: '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
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
        <h1 className={styles["title"]}>PublishFiles</h1>

        {FILE_LIST_DATA.map((data, idx) => (
          <article className={styles["wrapper"]} key={`cate_${idx}`}>
            <h2 className={styles["stile"]}>{data.category}</h2>

            <ul className={styles["list"]}>
              {data.list.map((item, index) => (
                <li>
                  <h3 className={styles["item-title"]}>{item.title}</h3>
                  <div className={styles["item-content"]}>
                    <p className={`${styles["item-status"]} ${styles[item.status]}`}>{item.status === 'InProgress' ? 'In Progress' : item.status}</p>
                    <Link className={styles["item-link"]} href={item.url} >{item.url}</Link>
                    <p>Completed Date : <time>{item.completedDate}</time></p>
                    <p>Update Date : <time>{item.updateDate}</time></p>
                    <div className={styles["item-note"]}>
                      Note : <p className={clampMap[item.id] ? '' : "line-clamp-1"}>{item.note}</p>
                      <button type="button" onClick={()=>handleClamp(item.id)} className="button-more">{!clampMap[item.id] ? '더보기' : '감추기' }</button>
                    </div>
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



