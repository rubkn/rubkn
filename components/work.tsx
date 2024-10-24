import { fetchRepos } from "@/lib/github";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Work() {
  /* const response = await fetchRepos({ count: 3 }); */
  const response = await fetchRepos({ count: 4 });
  /* const featured = response[0];
  const repos = response.slice(1); */

  return (
    <section className="space-y-8">
      <h2 className="font-bold tracking-tight">what {"I'm"} working on</h2>

      {/* <Card>
        <CardHeader>
          <CardTitle className="underline underline-offset-4">
            {featured.name}
          </CardTitle>
          <CardDescription>{featured.description}</CardDescription>
        </CardHeader>
      </Card> */}

      <div>
        <div className="grid gap-4 md:grid-cols-2">
          {response.map((repo) => (
            <Card key={repo.name}>
              <CardHeader>
                <Link href={repo.html_url!}>
                  <CardTitle className="underline underline-offset-4 transition-all hover:underline-offset-8">
                    {repo.name}
                  </CardTitle>
                </Link>
                <CardDescription>{repo.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="https://github.com/rubkn" passHref>
          <Button variant="link">
            View all projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
