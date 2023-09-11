import { useForm, FieldValues } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  categories: string[];
  addExpense: (data: {
    key: string;
    description: string;
    amount: number;
    category: string;
  }) => void;
}

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

const ExpenseForm = ({ categories, addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitHandler = ({ description, amount, category }: FieldValues) => {
    const newExpenseItem = {
      description: description,
      amount: amount,
      category: category,
      key: uuidv4(),
    };
    console.log(newExpenseItem);
    addExpense(newExpenseItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit((data) => submitHandler(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="text"
            id="description"
            className="form-control"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            amount
          </label>
          <input
            type="number"
            id="amount"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            category
          </label>
          <select
            id="category"
            className="form-select"
            {...register("category")}
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
    </div>
  );
};

export default ExpenseForm;
