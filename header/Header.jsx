import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Beautifull place in </span>
        <span className="headerTitleLg">Kazakhstan</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1582053403239-c58c07d86ce1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}
