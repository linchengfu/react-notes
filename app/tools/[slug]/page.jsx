import dayjs from "dayjs";
// export const dynamicParams = false;

export function generateStaticParams() {
  return [
    {
      slug: "math-solver",
    },
  ];
}

export function generateMetadata({ params }) {
  try {
    if (params.slug === "math-solver") {
      return { title: "Math Solver" };
    } else {
      throw new Error("Invalid slug");
    }
  } catch (error) {
    console.error(error);
    return { title: "Error" };
  }
}

export default function Page({ params }) {
  console.log(dayjs().format("YYYY-MM-DD"));
  if (params.slug === "math-solver") {
    return <div>Math Solver</div>;
  } else {
    throw new Error("Invalid slug");
  }
}
