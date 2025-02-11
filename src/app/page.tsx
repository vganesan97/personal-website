import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CommandMenu } from "../components/command-menu";
import { Metadata } from "next";
import { Section } from "../components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { RESUME_DATA } from "../data/resume-data";
import { ProjectCard } from "../components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-16 md:p-16">
      <section className="mx-auto w-full max-w-4.5xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-[37px] font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-lg text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            {/*<p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">*/}
            {/*  <a*/}
            {/*    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"*/}
            {/*    href={RESUME_DATA.locationLink}*/}
            {/*    target="_blank"*/}
            {/*  >*/}
            {/*    <GlobeIcon className="h-3 w-3" />*/}
            {/*    {RESUME_DATA.location}*/}
            {/*  </a>*/}
            {/*</p>*/}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <Button className="h-8 w-8" variant="outline" size="icon">
                    <MailIcon className="h-4 w-4" />
                  </Button>
                </a>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-pretty font-mono text-lg text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-2xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 text-xl font-semibold leading-none">
                      {work.link ?
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                          : work.company
                      }

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    {
                      work.end ?
                          <div className="text-md tabular-nums text-gray-500">
                            {work.start} - {work.end}
                          </div>
                          : <div className="text-md tabular-nums text-gray-500">
                            {work.start}
                          </div>
                    }

                  </div>

                  <h4 className="font-mono text-lg leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-lg">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge className="text-sm" key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              // @ts-ignore
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={project.link ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none text-lg">
                        {education.school}
                      </h3>
                      <div className="text-md tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 text-md">{education.degree}</CardContent>
                </Card>
            );
          })}
        </Section>
      </section>

      <CommandMenu
        links={[
          // {
          //   url: RESUME_DATA.personalWebsiteUrl,
          //   title: "Personal Website",
          // },
          ...RESUME_DATA.contact.social.map((socilaMediaLink) => ({
            url: socilaMediaLink.url,
            title: socilaMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
