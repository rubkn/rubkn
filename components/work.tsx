import { fetchRepos } from "@/lib/github";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Work() {
  const response = await fetchRepos({ count: 3 });
  const featured = response[0];
  const repos = response.slice(1);

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">Work</h2>

      <Card>
        <CardHeader>
          <CardTitle>Featured Project: What {"I'm"} Working On Now</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">{featured.name}</h3>
          <p className="text-muted-foreground mb-4">{featured.description}</p>
          <Button variant="outline">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-4">Other Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <Card key={repo.name}>
              <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
                <CardDescription>{repo.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/projects" passHref>
          <Button variant="link">
            View all projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
