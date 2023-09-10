import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .positive({ message: "Please enter valid amount." }),
  category: z.string().min(1, { message: "Please select below category." }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const [items, setItems] = useState([
    { description: "", amount: 0, category: "" },
  ]);

  const [category, setCategory] = useState("");

  const categories = ["volvo", "auto"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitHandler = (data: FieldValues) => {
    const { description, amount, category } = data;
    setItems([
      ...items,
      { description: description, amount: amount, category: category },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-control"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <hr></hr>
      <div className="mb-3">
        <label htmlFor="category" className="form-label"></label>
        <select className="form-control">
          <option value="">All categories</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.description}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTracker;
