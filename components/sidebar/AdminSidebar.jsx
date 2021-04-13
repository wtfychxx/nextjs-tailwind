import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminSidebar() {
  const [collapse, setCollapse] = useState("hidden");
  const router = useRouter();
  return <>Hallo</>;
}
