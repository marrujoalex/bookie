import { Outlet } from "react-router-dom";

export const loader =
  (queryClient: any) =>
  async ({ request }: { request: any}) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return { q };
  };

// Blueprint for creaating a rating of a book
// export const action = (queryClient: any) => async () => {
//   const rating = await createRating();
//   queryClient.invalidateQueries({ queryKey: ["ratings", "list"] });
//   return rating;
// };

export default function Root() {
    return (
        <div>
            <Outlet />
        </div>
    )
}