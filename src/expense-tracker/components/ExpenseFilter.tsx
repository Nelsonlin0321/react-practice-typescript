interface Props {
  categories: string[];
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelect }: Props) => {
  return (
    <div>
      <select
        className="form-control"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
