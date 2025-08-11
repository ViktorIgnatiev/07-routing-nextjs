import Link from 'next/link';
import css from './SidebarNotes.module.css';

// const tags: NoteTag[] = ['All', 'Personal', 'Work', 'Todo', 'Meeting', 'Shopping'];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={tag === 'All' ? '/notes/filter' : `/notes/filter/${tag}`}
            className={css.menuLink}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}