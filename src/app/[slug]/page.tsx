import React from "react";
import type { PageProps } from "@/types";

import { Container } from "@/components/Container";

const pages = {
  data: [
    {
      id: 1,
      slug: "features",
    },
    {
      id: 2,
      slug: "pricing",
    },
    {
      id: 3,
      slug: "company",
    },
  ],
};

interface StaticParamsProps {
  id: number;
  slug: string;
}

export async function generateStaticParams() {
  // return pages.data.map((page: Readonly<StaticParamsProps>) => ({
  //   slug: page.slug,
  // }));

  const pages = [
    { id: 1, slug: 'page1' },
    { id: 2, slug: 'page2' },
    { id: 3, slug: 'page3' },
    { id: 4, slug: 'page4' },
    { id: 5, slug: 'page5' },
    { id: 6, slug: 'page6' },
    { id: 7, slug: 'page7' },
    { id: 8, slug: 'page8' },
    { id: 9, slug: 'page9' },
    { id: 10, slug: 'page10' },
  ];

  console.log("flynow template Static Pages Slug:", pages);

  return pages.map((page: { slug: string }) => ({
    slug: page.slug, // returning only the slug as the dynamic route parameter
  }));
}






export default async function DynamicPageRoute(props: Readonly<PageProps>) {
  // const slug = props.params?.slug;
  const { slug } = props.params ?? {};
  console.log("flynow Slug:", slug);
  return (
    <Container>
      <div>Dynamic Page Route : {slug}</div>

    </Container>
  );
}
