"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play, RotateCcw } from "lucide-react";

const rawRows = [
  { id: "C001", name: "md. rahim", phone: "01700000000", email: "NULL", city: "Dhaka" },
  { id: "C001", name: "Md. Rahim", phone: "NULL", email: "rahim@mail", city: "dhaka" },
  { id: "C003", name: "sara k.", phone: "01900-999888", email: "sara@", city: "CTG" },
  { id: "C004", name: "NULL", phone: "01600112233", email: "NULL", city: "NULL" },
  { id: "C005", name: "Karim", phone: "01600112233", email: "karim@biz.com", city: "Sylhet" },
];

const cleanRows = [
  { id: "C001", name: "Md. Rahim", phone: "+8801700000000", email: "rahim@mail.com", city: "Dhaka" },
  { id: "C003", name: "Sara K.", phone: "+8801900999888", email: "sara@domain.com", city: "Chittagong" },
  { id: "C005", name: "Karim", phone: "+8801600112233", email: "karim@biz.com", city: "Sylhet" },
];

const cols = ["id", "name", "phone", "email", "city"] as const;

function DataTable({
  rows,
  isRaw,
}: {
  rows: typeof rawRows | typeof cleanRows;
  isRaw: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs font-mono">
        <thead>
          <tr className="border-b border-gray-200">
            {cols.map((col) => (
              <th
                key={col}
                className="text-left pb-2 pr-4 text-gray-400 font-normal uppercase tracking-wide text-[10px]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(rows as Record<string, string>[]).map((row, i) => {
            const isProblematic =
              isRaw && (i === 1 || Object.values(row).includes("NULL"));
            return (
              <tr
                key={i}
                className="border-b border-gray-100 last:border-0"
                style={{
                  color: isRaw
                    ? isProblematic
                      ? "#dc2626"
                      : "#374151"
                    : "#15803d",
                }}
              >
                {cols.map((col) => (
                  <td key={col} className="py-1.5 pr-4">
                    {row[col]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function DataShowcase() {
  const [view, setView] = useState<"raw" | "clean">("raw");

  const isRaw = view === "raw";

  return (
    <section id="data-showcase" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#0F6E56" }}
          >
            Data showcase
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            See the transformation
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-xl">
            Raw, unstructured datasets cleaned, deduplicated, and normalized
            through the Tritium pipeline — ready for systems and reporting.
          </p>
        </div>

        {/* Toggle controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-sm font-medium">
            <button
              onClick={() => setView("raw")}
              className="flex items-center gap-2 px-4 py-2 transition-colors"
              style={{
                backgroundColor: isRaw ? "#FEF2F2" : "white",
                color: isRaw ? "#dc2626" : "#6b7280",
                borderRight: "1px solid rgb(229,231,235)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full inline-block"
                style={{ backgroundColor: isRaw ? "#dc2626" : "#d1d5db" }}
              />
              Raw Input
            </button>
            <button
              onClick={() => setView("clean")}
              className="flex items-center gap-2 px-4 py-2 transition-colors"
              style={{
                backgroundColor: !isRaw ? "#F0FDF4" : "white",
                color: !isRaw ? "#15803d" : "#6b7280",
              }}
            >
              <span
                className="h-2 w-2 rounded-full inline-block"
                style={{ backgroundColor: !isRaw ? "#15803d" : "#d1d5db" }}
              />
              Clean Output
            </button>
          </div>

          {/* Pipeline action button */}
          {isRaw ? (
            <button
              onClick={() => setView("clean")}
              className="flex items-center gap-2 h-9 px-4 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#0F6E56" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#085041")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#0F6E56")
              }
            >
              <Play size={13} />
              Run pipeline
            </button>
          ) : (
            <button
              onClick={() => setView("raw")}
              className="flex items-center gap-2 h-9 px-4 rounded-lg text-sm font-medium border border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors bg-white"
            >
              <RotateCcw size={13} />
              Reset
            </button>
          )}
        </div>

        {/* Data panel */}
        <div
          className="rounded-xl border p-5 min-h-[220px] transition-colors duration-300"
          style={{
            borderColor: isRaw ? "#fecaca" : "#bbf7d0",
            backgroundColor: isRaw ? "rgb(254 242 242 / 0.4)" : "rgb(240 253 244 / 0.4)",
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full inline-block"
                style={{ backgroundColor: isRaw ? "#dc2626" : "#15803d" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: isRaw ? "#dc2626" : "#15803d" }}
              >
                {isRaw ? "Raw input" : "Clean output"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <span
                className="font-medium tabular-nums"
                style={{ color: isRaw ? "#dc2626" : "#15803d" }}
              >
                {isRaw ? "5" : "3"}
              </span>{" "}
              rows
              {isRaw && (
                <>
                  <span>·</span>
                  <span className="text-red-400">2 duplicates</span>
                  <span>·</span>
                  <span className="text-red-400">4 NULLs</span>
                </>
              )}
              {!isRaw && (
                <>
                  <span>·</span>
                  <span className="text-green-600">deduplicated</span>
                  <span>·</span>
                  <span className="text-green-600">validated</span>
                </>
              )}
            </div>
          </div>

          {/* Animated content swap */}
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <DataTable
                rows={isRaw ? rawRows : cleanRows}
                isRaw={isRaw}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pipeline connector (desktop decoration) */}
        <div className="hidden lg:flex items-center gap-3 my-3 px-1">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <ArrowRight size={12} style={{ color: "#0F6E56" }} />
            <span style={{ color: "#0F6E56" }} className="font-medium">
              Tritium pipeline
            </span>
            <ArrowRight size={12} style={{ color: "#0F6E56" }} />
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Caption badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["Deduplicated", "Normalized", "Null-handled", "Standardized"].map(
            (tag) => (
              <span
                key={tag}
                className="inline-flex items-center h-6 px-3 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "#E1F5EE",
                  color: "#0F6E56",
                  borderColor: "#0F6E56",
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
