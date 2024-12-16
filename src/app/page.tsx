import { client } from "@/sanity/lib/client";

export default async function Home() {

  const getData = async () => {
    const res = await client.fetch(`*[_type == 'product']{
          name,
    fullname
    }`)

    console.log(res)
    return res

  }
  const data = await getData()

  return (
    <div>
      {data.map((product: any, index: number) => (
        <div key={index}>
          <div>Name: {product.name}</div>
          <div>Name: {product.fullname}</div>
        </div>
      ))}
    </div>
  );
}
