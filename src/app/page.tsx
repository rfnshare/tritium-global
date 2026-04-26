import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { DataShowcase } from '@/components/sections/DataShowcase'
import { Projects } from '@/components/sections/Projects'
import { WhyUs } from '@/components/sections/WhyUs'
import { CtaSection } from '@/components/sections/CtaSection'
import { getAllServices, getAllProjects } from '@/lib/content'

export default function HomePage() {
  const services = getAllServices()
  const projects = getAllProjects()

  return (
    <>
      <Hero />
      <Services services={services} />
      <DataShowcase />
      <Projects projects={projects} />
      <WhyUs />
      <CtaSection />
    </>
  )
}
