import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link as RemixLink } from "@remix-run/react";
import { Link, Typography } from "@mui/material";

// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: "Remix Starter" },
  { name: "description", content: "Welcome to remix!" },
];

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function SectionTwo() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Section Two
      </Typography>
      <Link to="/about" color="secondary" component={RemixLink}>
        Go to the about page
      </Link>
    </React.Fragment>
  );
}
