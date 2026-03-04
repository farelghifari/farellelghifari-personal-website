'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NestedAccordionSection } from './nested-accordion-section'
import { SkillsSection } from './skills-section'
import { SupportingDocuments } from './supporting-documents'
import type { SupportingDocument } from '@/data/portfolio'

interface VolunteeringItem {
  id: string
  organization: string
  role: string
  description: string
  impact: string[]
  tags: string[]
}

interface AchievementItem {
  id: string
  title: string
  date: string
  category: string
  description: string
  details: string[]
  tags: string[]
}

interface AccordionItemProps {
  id: string
  title: string
  subtitle?: string
  summary: string
  details?: string[]
  tags?: string[]
  images?: string[]
  startDate?: string
  endDate?: string
  volunteering?: VolunteeringItem[]
  achievements?: AchievementItem[]
  skills?: string[]
  supportingDocuments?: SupportingDocument[]
  isPlaceholder?: boolean
  expandedPreview?: boolean
  detailLink?: string
  category?: string
}

export function AccordionItem({
  id,
  title,
  subtitle,
  summary,
  details = [],
  tags = [],
  images = [],
  startDate,
  endDate,
  volunteering = [],
  achievements = [],
  skills = [],
  supportingDocuments = [],
  isPlaceholder = false,
  expandedPreview = false,
  detailLink,
  category,
}: AccordionItemProps) {

  const [isExpanded, setIsExpanded] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const dateRange =
    startDate && endDate
      ? `${startDate} - ${endDate}`
      : startDate
      ? startDate
      : null

  const currentImage = images[imageIndex] || null

  useEffect(() => {
    if (isExpanded && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [isExpanded])

  useEffect(() => {
    if (!isExpanded || images.length <= 1) return

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isExpanded, images.length])

  const handleHeaderClick = (e: React.MouseEvent) => {
    if (detailLink && !isExpanded) {
      e.preventDefault()
      window.location.href = detailLink
      return
    }

    setIsExpanded(true)
  }

  return (
    <div
      ref={ref}
      className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-card/80 cursor-pointer"
    >
      {!isExpanded && (
        <button
          onClick={handleHeaderClick}
          className="group w-full px-4 sm:px-6 py-4 text-left hover:bg-primary/5 transition-colors"
        >
          <div className="flex w-full flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex-1 space-y-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                  {title}
                </h3>

                {isPlaceholder && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    Skeleton
                  </span>
                )}
              </div>

              {subtitle && (
                <p className="text-sm text-primary font-medium">
                  {subtitle}
                </p>
              )}

              {dateRange && (
                <p className="text-xs text-foreground/60">
                  {dateRange}
                </p>
              )}

              <p className="text-sm mt-3 line-clamp-2 text-foreground/70">
                {summary}
              </p>
            </div>

            <ChevronDown
              size={20}
              className="text-foreground/50 flex-shrink-0 group-hover:text-foreground/70 transition-all self-start sm:self-center"
            />
          </div>
        </button>
      )}

      {isExpanded && (
        <div className="w-full">

          <button
            onClick={() => setIsExpanded(false)}
            className="w-full p-6 text-left hover:bg-primary/5 transition-colors border-b border-border"
          >
            <div className="flex items-center justify-between gap-5">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>

                {subtitle && (
                  <p className="text-sm text-primary font-medium mt-1">
                    {subtitle}
                  </p>
                )}

                {dateRange && (
                  <p className="text-xs text-foreground/60 mt-2">
                    {dateRange}
                  </p>
                )}
              </div>

              <ChevronDown
                size={20}
                className="text-foreground/50 flex-shrink-0 rotate-180"
              />
            </div>
          </button>

          <div className="p-6 bg-background/50 grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 space-y-6">

              {currentImage && (
                <div className="space-y-3">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-muted">
                    <Image
                      src={currentImage}
                      alt={title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold mb-2">
                  Overview
                </h4>

                <p className="text-sm text-foreground/80 leading-relaxed">
                  {summary}
                </p>
              </div>

              {details.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-3">
                    Key Points
                  </h4>

                  <ul className="space-y-2">
                    {details.map((detail, index) => (
                      <li key={index} className="flex gap-3 text-sm">
                        <span className="text-primary font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {volunteering.length > 0 && (
                <NestedAccordionSection
                  title="Volunteering"
                  items={volunteering.map((vol) => ({
                    id: vol.id,
                    title: vol.organization,
                    subtitle: vol.role,
                    description: vol.description,
                    details: vol.impact,
                    tags: vol.tags,
                  }))}
                  variant="volunteering"
                />
              )}

              {achievements.length > 0 && (
                <NestedAccordionSection
                  title="Achievements"
                  items={achievements.map((ach) => ({
                    id: ach.id,
                    title: ach.title,
                    subtitle: `${ach.category} • ${ach.date}`,
                    description: ach.description,
                    details: ach.details,
                    tags: ach.tags,
                  }))}
                  variant="achievements"
                />
              )}

              {skills.length > 0 && (
                <SkillsSection
                  skills={skills}
                  certificationTitle={title}
                />
              )}
            </div>

            {supportingDocuments && supportingDocuments.length > 0 && (
              <div className="lg:col-span-1">
                <SupportingDocuments documents={supportingDocuments} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}