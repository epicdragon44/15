import { Link } from "waku";

export const Footer = () => {
  return (
    <footer className="p-6 lg:fixed lg:bottom-0 lg:left-0 flex flex-row gap-4">
      <a href="https://x.com/fromdanielwei15" target="_blank">
        twitter
      </a>
      <a href="https://www.linkedin.com/in/weidaniel15/" target="_blank">
        linkedin
      </a>
      <a href="https://github.com/epicdragon44/" target="_blank">
        github
      </a>
      <Link to="/photos">photos</Link>
      <Link to="/blog">writing</Link>
    </footer>
  );
};
