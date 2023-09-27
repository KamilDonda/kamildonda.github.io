export function Section({ title, component }) {
  return (
    <div className="margin big-space">
      <h2 className="gold small-space">{title}</h2>
      {component}
    </div>
  );
}
