import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import IOWrapper from "../components/animation/IOWrapper"
import FluidList from "../components/animation/FluidList"

function ProjectsPage({ data }) {
  const { title, content, projects } = data.projectsJson

  return (
    <div>
      <SEO
        title="Projects"
        keywords={[
          `joschuaschneider`,
          `developer`,
          `react`,
          `javascript`,
          `portfolio`,
          `homepage`,
          `projects`
        ]}
      />
      <div className="container">
        <IOWrapper className="row mb-5">
          <div className="col-12 col-lg-auto left-col p-4">
            <h4>{title}</h4>
          </div>
          <div
            className="col-12 col-lg p-4 content hovered"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </IOWrapper>
        <FluidList>
          {projects.map(project => (
            <IOWrapper key={project.title} className="row project-row mb-5">
              <div className="col-12 col-lg-auto left-col" />
              <div className="col-12 col-lg content">
                {project.href && (
                  <a href={project.href} className="project-title link">
                    <h4>{project.title}</h4>
                  </a>
                )}
                {!project.href && (
                  <div className="closed-source project-title blank d-flex align-items-center">
                    <h4>{project.title}</h4>
                    <span
                      className="text-muted small cs-info"
                      title="Contact me to get further information or code samples"
                    >
                      [closed source]
                    </span>
                  </div>
                )}
                <div className="types small">
                  {project.types.map(type => (
                    <div key={type}>{type}</div>
                  ))}
                </div>
                <div
                  className="md-content"
                  dangerouslySetInnerHTML={{
                    __html: project.content.childMarkdownRemark.html,
                  }}
                />
              </div>
            </IOWrapper>
          ))}
        </FluidList>
      </div>
    </div>
  )
}

export const query = graphql`
  query ProjectsQuery {
    projectsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      projects {
        title
        href
        types
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

export default ProjectsPage
