export default function Header({ title }: { title: string }) {
  return (
    <header className="page-header">
      <h1>{title}</h1>
      <p className="subtitle">Exploring Modular Design</p>
    </header>
  );
}
