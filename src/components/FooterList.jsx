function FooterList({ title, items }) {
  return (
    <ul className="space-y-6">
      <li className="text-2xl text-orange-primary font-semibold">{title}</li>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default FooterList;
