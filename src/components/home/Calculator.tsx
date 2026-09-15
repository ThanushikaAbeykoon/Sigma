"use client";

import { useMemo, useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import SectionHeading from "@/components/ui/SectionHeading";
import CheckEligibilityButton from "@/components/eligibility/CheckEligibilityButton";

type RateType =
  | "Annual Interest Rate"
  | "Monthly Interest Rate"
  | "Flat Rate"
  | "Factor Rate";

type FeeType = "percentage" | "fixed";

const RATE_TYPES: { type: RateType; defaultValue: number; label: string }[] = [
  { type: "Annual Interest Rate", defaultValue: 8.9, label: "Annual Rate" },
  { type: "Monthly Interest Rate", defaultValue: 0.75, label: "Monthly Rate" },
  { type: "Flat Rate", defaultValue: 6, label: "Flat Rate" },
  { type: "Factor Rate", defaultValue: 1.2, label: "Factor Rate" },
];

interface CalculationResult {
  annualRate: number;
  monthlyRate: number;
  dailyRate: number;
  yieldRate: number;
  factorRate: number;
  flatRate: number;
  arrangementFee: number;
  totalLoanAmount: number;
  totalInterest: number;
  totalPayable: number;
  monthlyPayment: number;
}

const formatNumber = (value: number) =>
  value.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function Calculator() {
  const [amount, setAmount] = useState<number | null>(100000);
  const [months, setMonths] = useState<number | null>(36);

  const [rateType, setRateType] = useState<RateType>("Annual Interest Rate");
  const [rateValue, setRateValue] = useState<number | null>(8.9);

  const [feeType, setFeeType] = useState<FeeType>("percentage");
  const [feeValue, setFeeValue] = useState<number | null>(2.0);

  const calculations = useMemo<CalculationResult | null>(() => {
    if (!amount || !months || !rateValue) return null;

    const arrangementFee = feeValue
      ? feeType === "percentage"
        ? amount * (feeValue / 100)
        : feeValue
      : 0;

    const totalLoanAmount = amount + arrangementFee;
    const termInYears = months / 12;

    let annualRate = 0;
    let totalPayable = 0;
    let monthlyPayment = 0;
    let totalInterest = 0;

    switch (rateType) {
      case "Annual Interest Rate": {
        annualRate = rateValue;
        const monthlyInterestRate = annualRate / 100 / 12;
        monthlyPayment =
          monthlyInterestRate > 0
            ? (totalLoanAmount *
                monthlyInterestRate *
                Math.pow(1 + monthlyInterestRate, months)) /
              (Math.pow(1 + monthlyInterestRate, months) - 1)
            : totalLoanAmount / months;
        totalPayable = monthlyPayment * months;
        totalInterest = totalPayable - totalLoanAmount;
        break;
      }
      case "Monthly Interest Rate": {
        annualRate = rateValue * 12;
        const monthlyRate = rateValue / 100;
        monthlyPayment =
          monthlyRate > 0
            ? (totalLoanAmount *
                monthlyRate *
                Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1)
            : totalLoanAmount / months;
        totalPayable = monthlyPayment * months;
        totalInterest = totalPayable - totalLoanAmount;
        break;
      }
      case "Factor Rate": {
        totalPayable = totalLoanAmount * rateValue;
        totalInterest = totalPayable - totalLoanAmount;
        monthlyPayment = totalPayable / months;
        annualRate = ((rateValue - 1) / termInYears) * 100;
        break;
      }
      case "Flat Rate": {
        totalInterest = totalLoanAmount * (rateValue / 100) * termInYears;
        totalPayable = totalLoanAmount + totalInterest;
        monthlyPayment = totalPayable / months;
        annualRate = (totalInterest / totalLoanAmount / termInYears) * 100;
        break;
      }
    }

    const monthlyRate = annualRate / 12;
    const dailyRate = annualRate / 365;
    const yieldRate = (totalInterest / totalLoanAmount) * 100;
    const factorRate = totalPayable / totalLoanAmount;
    const flatRate = rateType === "Flat Rate" ? rateValue : annualRate / 2;

    return {
      annualRate,
      monthlyRate,
      dailyRate,
      yieldRate,
      factorRate,
      flatRate,
      arrangementFee,
      totalLoanAmount,
      totalInterest,
      totalPayable,
      monthlyPayment,
    };
  }, [amount, months, rateType, rateValue, feeType, feeValue]);

  const chartData = useMemo(() => {
    if (!calculations || !amount) return [];
    return [
      { name: "Principal", value: amount, color: "#e040fb" },
      { name: "Total Interest", value: calculations.totalInterest, color: "#311b92" },
      { name: "Arrangement Fees", value: calculations.arrangementFee, color: "#a89fbb" },
    ].filter((item) => item.value > 0);
  }, [calculations, amount]);

  const comparisonData = calculations
    ? [
        { name: "Annual Interest Rate", value: `${calculations.annualRate.toFixed(2)}%` },
        { name: "Monthly Interest Rate", value: `${calculations.monthlyRate.toFixed(3)}%` },
        { name: "Daily Interest Rate", value: `${calculations.dailyRate.toFixed(4)}%` },
        { name: "Yield / Interest as %", value: `${calculations.yieldRate.toFixed(3)}%` },
        { name: "Factor Rate", value: calculations.factorRate.toFixed(4) },
        { name: "Flat Rate", value: `${calculations.flatRate.toFixed(1)}%` },
      ]
    : null;

  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Repayment Calculator"
          title="Estimate your monthly repayments"
          description="Get an instant, transparent quote before you apply. Compare rate types, factor in fees, and see exactly what you'll pay."
          align="center"
          className="mx-auto"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:col-span-4"
          >
            <div className="flex flex-1 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-700">
                <CalculatorIcon className="h-4 w-4" />
                Quote Details
              </div>

              <div className="mt-6 flex flex-1 flex-col justify-between gap-7">
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="loan-amount" className="text-sm font-medium text-neutral-700">
                      Loan amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">£</span>
                      <input
                        id="loan-amount"
                        type="number"
                        value={amount ?? ""}
                        onChange={(e) => setAmount(e.target.value === "" ? null : Number(e.target.value))}
                        className="w-28 rounded-lg border border-neutral-200 py-1 pl-5 pr-2 text-right text-sm font-bold text-neutral-900 focus:border-primary-700 focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={500000}
                    step={1000}
                    value={amount ?? 0}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="mt-3 w-full accent-secondary-500"
                  />
                  <div className="mt-1 flex justify-between text-xs text-neutral-500">
                    <span>£1k</span>
                    <span>£500k</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="loan-term" className="text-sm font-medium text-neutral-700">
                      Loan term
                    </label>
                    <span className="text-sm font-bold text-primary-700">{months} months</span>
                  </div>
                  <input
                    id="loan-term"
                    type="range"
                    min={1}
                    max={72}
                    step={1}
                    value={months ?? 1}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="mt-3 w-full accent-secondary-500"
                  />
                  <div className="mt-1 flex justify-between text-xs text-neutral-500">
                    <span>1 month</span>
                    <span>72 months</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">Interest rate</label>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {RATE_TYPES.map(({ type, defaultValue, label }) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setRateType(type);
                          setRateValue(defaultValue);
                        }}
                        className={`rounded-lg px-2 py-2 text-xs font-bold transition-colors ${
                          rateType === type
                            ? "bg-primary-700 text-white shadow-sm"
                            : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <div className="relative mt-2">
                    <input
                      type="number"
                      value={rateValue ?? ""}
                      onChange={(e) => setRateValue(e.target.value === "" ? null : Number(e.target.value))}
                      step={0.01}
                      className="w-full rounded-lg border border-neutral-200 py-2.5 pl-3 pr-8 text-sm font-bold text-neutral-900 focus:border-primary-700 focus:outline-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
                      {rateType === "Factor Rate" ? "x" : "%"}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-100">
                  <label className="text-sm font-medium text-neutral-700">Arrangement fee</label>
                  <div className="mt-3 grid grid-cols-2 rounded-lg bg-white p-1 ring-1 ring-neutral-200">
                    <button
                      type="button"
                      onClick={() => {
                        setFeeType("percentage");
                        setFeeValue(2.0);
                      }}
                      className={`rounded-md py-1.5 text-xs font-bold transition-colors ${
                        feeType === "percentage" ? "bg-primary-700 text-white" : "text-neutral-500"
                      }`}
                    >
                      Percentage %
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFeeType("fixed");
                        setFeeValue(500);
                      }}
                      className={`rounded-md py-1.5 text-xs font-bold transition-colors ${
                        feeType === "fixed" ? "bg-primary-700 text-white" : "text-neutral-500"
                      }`}
                    >
                      Fixed £
                    </button>
                  </div>

                  {feeType === "percentage" ? (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs font-bold text-neutral-600">
                        <span>0%</span>
                        <span className="text-primary-700">{feeValue}%</span>
                        <span>50%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={50}
                        step={0.1}
                        value={feeValue ?? 0}
                        onChange={(e) => setFeeValue(Number(e.target.value))}
                        className="mt-2 w-full accent-secondary-500"
                      />
                    </div>
                  ) : (
                    <div className="relative mt-3">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">£</span>
                      <input
                        type="number"
                        value={feeValue ?? ""}
                        onChange={(e) => setFeeValue(e.target.value === "" ? null : Number(e.target.value))}
                        className="w-full rounded-lg border border-neutral-200 py-2 pl-6 pr-3 text-sm font-bold text-neutral-900 focus:border-primary-700 focus:outline-none"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results + summary */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200">
                <div className="h-1.5 bg-gradient-to-r from-primary-700 to-secondary-500" />
                <div className="flex flex-col gap-6 p-6 sm:p-8">
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      Estimated monthly payment
                    </p>
                    <p className="mt-2 text-4xl font-bold text-gradient sm:text-5xl">
                      £{calculations ? formatNumber(calculations.monthlyPayment) : "0.00"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-neutral-100 pt-6">
                    <div className="rounded-2xl bg-neutral-50 p-4 text-center ring-1 ring-neutral-100">
                      <p className="text-[10px] font-semibold uppercase text-neutral-500">Total interest</p>
                      <p className="mt-1 text-lg font-bold text-secondary-600">
                        {calculations ? `£${formatNumber(calculations.totalInterest)}` : "£0.00"}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-neutral-50 p-4 text-center ring-1 ring-neutral-100">
                      <p className="text-[10px] font-semibold uppercase text-neutral-500">Total payable</p>
                      <p className="mt-1 text-lg font-bold text-primary-800">
                        {calculations ? `£${formatNumber(calculations.totalPayable)}` : "£0.00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-1 flex-col"
            >
              <div className="flex flex-1 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
                <p className="text-lg font-bold text-neutral-900">Your loan quote summary</p>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Including fees</p>

                <div className="mt-4 space-y-3 text-sm">
                  {[
                    ["Loan amount", `£${amount ? formatNumber(amount) : "0.00"}`],
                    [
                      "Arrangement fee",
                      calculations ? `£${formatNumber(calculations.arrangementFee)}` : "£0.00",
                    ],
                    [
                      "Total loan amount",
                      calculations ? `£${formatNumber(calculations.totalLoanAmount)}` : "£0.00",
                    ],
                    ["Loan term", `${months} months`],
                    [
                      "Monthly payment",
                      calculations ? `£${formatNumber(calculations.monthlyPayment)}` : "£0.00",
                    ],
                    [
                      "Total interest",
                      calculations ? `£${formatNumber(calculations.totalInterest)}` : "£0.00",
                    ],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-neutral-100 py-2">
                      <span className="font-medium text-neutral-600">{label}</span>
                      <span className="font-bold text-neutral-900">{value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between rounded-xl bg-primary-50 px-3 py-3">
                    <span className="text-xs font-bold uppercase text-primary-800">Total payable</span>
                    <span className="text-xl font-bold text-primary-800">
                      {calculations ? `£${formatNumber(calculations.totalPayable)}` : "£0.00"}
                    </span>
                  </div>
                </div>

                <p className="mt-auto pt-4 text-center text-[11px] leading-relaxed text-neutral-500">
                  This tool provides an indicative estimate only. Rates and terms are conditional and subject to
                  lender criteria.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Cost + rate breakdown */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Cost breakdown
                </p>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height={256}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => `£${formatNumber(Number(value))}`}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          fontWeight: "bold",
                        }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        formatter={(value) => <span className="text-xs font-semibold text-neutral-600">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-1 flex-col"
            >
              <div className="flex flex-1 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                <p className="text-base font-bold text-neutral-900">Rate breakdown</p>
                <div className="mt-3 flex flex-1 flex-col justify-between">
                  {comparisonData
                    ? comparisonData.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between border-b border-neutral-100 py-2.5 last:border-0"
                        >
                          <span className="text-sm font-medium text-neutral-500">{item.name}</span>
                          <span className="text-sm font-bold text-neutral-900">{item.value}</span>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-primary-950 p-8 text-center sm:p-10"
        >
          <div
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-secondary-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-3">
            <h3 className="text-2xl font-bold text-white">Ready to proceed?</h3>
            <p className="text-sm text-primary-200">
              Check your eligibility in 60 seconds with no impact on your credit score.
            </p>
            <CheckEligibilityButton variant="secondary" size="lg" className="mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
