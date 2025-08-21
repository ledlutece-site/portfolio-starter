export default function Footer(){
  return (
    <footer className="py-10 border-t border-white/10 mt-10">
      <div className="container-g text-sm opacity-70">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
