"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { NestedAccordionSection } from "./nested-accordion-section";
import { SkillsSection } from "./skills-section";
import { SupportingDocuments } from "./supporting-documents";
import type { SupportingDocument } from "@/data/portfolio";
import { scrollLockToElement } from "@/lib/scroll-lock"

interface VolunteeringItem {
  id: string;
  organization: string;
  role: string;
  description: string;
  impact: string[];
  tags: string[];
}

interface AchievementItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  details: string[];
  tags: string[];
}

interface AccordionItemProps {
  id: string;
  title: string;
  subtitle?: string;
  logo?: string;
  summary: string;
  details?: string[];
  responsibilities?: string[];
  tags?: string[];
  images?: string[];
  imageTitles?: string[]; // added
  startDate?: string;
  endDate?: string;
  volunteering?: VolunteeringItem[];
  achievements?: any[];
  skills?: string[];
  supportingDocuments?: SupportingDocument[];
  isPlaceholder?: boolean;
  detailLink?: string;
  category?: string;
  variants?: any;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  id,
  title,
  subtitle,
  logo,
  summary,
  details = [],
  responsibilities = [],
  tags = [],
  images = [],
  imageTitles = [], // added
  startDate,
  endDate,
  volunteering = [],
  achievements = [],
  skills = [],
  supportingDocuments = [],
  isPlaceholder = false,
  detailLink,
  category,
  variants,
  isOpen,
  onToggle,
}: AccordionItemProps) {

  const [internalOpen, setInternalOpen] = useState(false);
  const isExpanded = isOpen !== undefined ? isOpen : internalOpen;
  const toggle = onToggle || (() => setInternalOpen(!internalOpen));

  const [imageIndex, setImageIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const scrollToHeader = () => {
  if (!ref.current) return

    const offset = 120

    const top =
      ref.current.getBoundingClientRect().top +
      window.scrollY -
      offset

    window.scrollTo({
      top,
      behavior: "smooth"
    })
  }

  const dateRange =
    startDate && endDate ? `${startDate} - ${endDate}` : startDate || null;

  const currentImage = images[imageIndex] || null;

  const allKeyPoints = [
    ...details,
    ...responsibilities,
    ...(category !== "education" ? achievements : []),
  ].filter((p) => p && (typeof p === "string" || p.title));

  useEffect(() => {

  if (!isExpanded || !ref.current) return

  const el = ref.current

  const timer = setTimeout(() => {

    const rect = el.getBoundingClientRect()

    const offset = 110

    const target =
      window.scrollY +
      rect.top -
      offset

    window.scrollTo({
      top: target,
      behavior: "smooth"
    })

  }, 350)   // tunggu animasi accordion selesai

  return () => clearTimeout(timer)

}, [isExpanded])

  /* AUTO SLIDE (ONLY PREVIEW) */
  useEffect(() => {
    if (!isExpanded || images.length <= 1 || viewerOpen) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isExpanded, images.length, viewerOpen]);

  const nextImage = () =>
    setImageIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        layout="position"
        transition={{ layout: { duration: 0.25 } }}
        className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-card/80 cursor-pointer"
      >

        {/* HEADER */}
        <button
          onClick={() => toggle()}
          className={cn(
            "group w-full px-4 sm:px-6 py-4 text-left hover:bg-primary/5 transition-colors",
            isExpanded && "border-b border-border bg-primary/5"
          )}
        >
          <div className="flex gap-5 w-full items-center">

            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted/30 flex items-center justify-center">
              {logo && !imageError ? (
                <Image
                  src={logo}
                  alt={title}
                  fill
                  className="object-contain p-1.5"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-xl sm:text-2xl font-bold text-primary uppercase">
                  {title?.charAt(0)}
                </span>
              )}
            </div>

            <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">

              <div className="flex-1 space-y-1">
                <h3
                  className={cn(
                    "font-semibold transition-colors",
                    isExpanded
                      ? "text-lg sm:text-xl text-primary"
                      : "text-sm sm:text-base group-hover:text-primary"
                  )}
                >
                  {title}
                </h3>

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
              </div>

              <ChevronDown
                size={20}
                className={cn(
                  "text-foreground/50 transition-all",
                  isExpanded && "rotate-180"
                )}
              />
            </div>
          </div>
        </button>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: 15 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 10 }}
            >

              <div className="p-6 bg-background/50 grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 space-y-6">

                  {/* IMAGE CAROUSEL */}
                  {currentImage && (
                    <>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-muted/60">

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImage}
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -80, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={currentImage}
                              alt={title}
                              fill
                              className="object-contain p-2 cursor-zoom-in"
                              onClick={() => setViewerOpen(true)}
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* NEW: OVERLAY CAPTION */}
                        {imageTitles?.[imageIndex] && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white pointer-events-none">
                            <p className="font-semibold text-sm sm:text-base">
                              {imageTitles[imageIndex]}
                            </p>
                            {subtitle && (
                              <p className="text-xs opacity-80">
                                {subtitle}
                              </p>
                            )}
                          </div>
                        )}

                        {images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                              }}
                              className="absolute left-3 top-1/2 -translate-y-1/2
                              bg-black/40 border border-white/20
                              backdrop-blur p-2 rounded-full"
                            >
                              <ChevronLeft size={18} color="white" />
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2
                              bg-black/40 border border-white/20
                              backdrop-blur p-2 rounded-full"
                            >
                              <ChevronRight size={18} color="white" />
                            </button>

                            <div className="absolute bottom-3 w-full flex justify-center gap-2">
                              {images.map((_, i) => (
                                <div
                                  key={i}
                                  className={cn(
                                    "h-2 rounded-full transition-all",
                                    i === imageIndex
                                      ? "w-6 bg-white"
                                      : "w-2 bg-white/60"
                                  )}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* THUMBNAILS */}
                      {images.length > 1 && (
                        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                          {images.map((img, i) => (
                            <button
                              key={i}
                              onClick={() => setImageIndex(i)}
                              className={cn(
                                "relative w-20 h-14 rounded-md overflow-hidden border",
                                i === imageIndex
                                  ? "border-primary"
                                  : "border-border opacity-70 hover:opacity-100"
                              )}
                            >
                              <Image
                                src={img}
                                alt={imageTitles?.[i] || title}
                                fill
                                className="object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {/* OVERVIEW */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Overview
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {summary}
                    </p>
                  </div>

                  {/* KEY POINTS */}
                  {allKeyPoints.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Key Points
                      </h4>

                      <ul className="space-y-2">
                        {allKeyPoints.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm text-foreground/80"
                          >
                            <span className="text-primary font-bold flex-shrink-0">
                              •
                            </span>
                            <span>
                              {typeof point === "string"
                                ? point
                                : point.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* VOLUNTEERING */}
                  {volunteering.length > 0 && (
                    <NestedAccordionSection
                      title="Volunteering"
                      items={volunteering.map((v) => ({
                        id: v.id,
                        title: v.organization,
                        subtitle: v.role,
                        description: v.description,
                        details: v.impact,
                        tags: v.tags,
                      }))}
                      variant="volunteering"
                    />
                  )}

                  {/* ACHIEVEMENTS */}
                  {category === "education" && achievements.length > 0 && (
                    <NestedAccordionSection
                      title="Achievements"
                      items={achievements.map((a: AchievementItem) => ({
                        id: a.id,
                        title: a.title,
                        subtitle: `${a.category} • ${a.date}`,
                        description: a.description,
                        details: a.details,
                        tags: a.tags,
                      }))}
                      variant="achievements"
                    />
                  )}

                  <div className="space-y-4">
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

                    {skills.length > 0 && (
                      <SkillsSection
                        skills={skills}
                        certificationTitle={title}
                      />
                    )}
                  </div>

                  {(detailLink || (category && id)) && (
                    <div className="flex justify-end pt-4 border-t border-border/50">
                      <a
                        href={detailLink || `/${category}/${id}`}
                        target={
                          detailLink?.startsWith("http")
                            ? "_blank"
                            : "_self"
                        }
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/30 text-primary px-4 py-2 text-sm font-medium transition-all hover:bg-primary/5 hover:border-primary"
                      >
                        View Details
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  )}

                </div>

                {supportingDocuments.length > 0 && (
                  <div className="lg:col-span-1">
                    <SupportingDocuments documents={supportingDocuments} />
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* FULLSCREEN VIEWER */}
      {viewerOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setViewerOpen(false)}
        >

          <Image
            src={images[imageIndex]}
            alt="preview"
            width={1600}
            height={1000}
            className="object-contain max-h-[90vh]"
          />

          {/* NEW: FULLSCREEN CAPTION */}
          {imageTitles?.[imageIndex] && (
            <div className="absolute bottom-10 left-10 bg-black/60 backdrop-blur p-4 rounded-lg text-white max-w-md">
              <p className="font-semibold text-lg">
                {imageTitles[imageIndex]}
              </p>
              {subtitle && (
                <p className="text-sm opacity-80">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <button
            className="absolute top-6 right-6
            bg-black/40 border border-white/20
            backdrop-blur p-2 rounded-full"
            onClick={() => setViewerOpen(false)}
          >
            <X size={24} color="white" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6
                bg-black/40 border border-white/20
                backdrop-blur p-3 rounded-full"
              >
                <ChevronLeft size={28} color="white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6
                bg-black/40 border border-white/20
                backdrop-blur p-3 rounded-full"
              >
                <ChevronRight size={28} color="white" />
              </button>
            </>
          )}

        </div>
      )}
    </>
  );
}