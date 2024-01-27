import { useStaticQuery, graphql } from "gatsby"

type CommonType = {
  header: Queries.CommonJsonHeader
  footer: Queries.CommonJsonFooter,
  solution: Queries.CommonJsonSolution,
  testimonials: NonNullable<Queries.CommonJsonTestimonialsTestimonial[]>
}

const useCommon = (): CommonType => {
  const { header, footer, solution, testimonials } = useStaticQuery(graphql`
    query commonJson {
      header: commonJson(_xtype: { eq: "header" }) {
        node: header {
          logo
          navItems {
            item
          }
        }
      }
      footer: commonJson(_xtype: { eq: "footer" }) {
        node: footer {
          logo
          address
          columns {
            heading
            elements {
              text
            }
          }
          social {
            icon
            link
          }
        }
      }
      solution: commonJson(_xtype: { eq: "solution" }) {
        node: solution {
          title
          titleHighlight
          image
          description
        }
      }
      testimonials: commonJson(_xtype: { eq: "testimonial" }) {
        node: testimonials {
          testimonial {
            testimony
            name
            bio
            image
          }
        }
      }
    }
  `)
  return {
    header: header.node,
    footer: footer.node,
    testimonials: testimonials.node.testimonial,
    solution: solution.node,
  }
}

export default useCommon
