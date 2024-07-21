"use client"

import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart"
const chartData1 = [
    { expenses: "housing", amount: 3219, fill: "var(--color-housing)" },
    { expenses: "food", amount: 3432, fill: "var(--color-food)" },
    { expenses: "transportation", amount: 3214, fill: "var(--color-transportation)" },
    { expenses: "healthcare", amount: 3213, fill: "var(--color-healthcare)" },
    { expenses: "entertainment", amount: 3211, fill: "var(--color-entertainment)" },
]
const chartData2 = [
    { expenses: "housing", amount: 3219, fill: "var(--color-housing)" },
    { expenses: "food", amount: 3432, fill: "var(--color-food)" },
    { expenses: "healthcare", amount: 3213, fill: "var(--color-healthcare)" },
]

const chartConfig1 = {
    amount: {
        label: "Amount",
    },
    housing: {
        label: "Housing",
        color: "hsl(var(--chart-1))",
    },
    food: {
        label: "Food",
        color: "hsl(var(--chart-2))",
    },
    transportation: {
        label: "Transportation",
        color: "hsl(var(--chart-3))",
    },
    healthcare: {
        label: "Healthcare",
        color: "hsl(var(--chart-4))",
    },
    entertainment: {
        label: "Entertainment",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig
const chartConfig2 = {
    amount: {
        label: "Amount",
    },
    housing: {
        label: "Housing",
        color: "hsl(var(--chart-1))",
    },
    food: {
        label: "Food",
        color: "hsl(var(--chart-2))",
    },
    healthcare: {
        label: "Healthcare",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig

export function Chart1() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Plan1</CardTitle>
                <CardDescription>50 - 30 - 20</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig1}
                    className="mx-auto aspect-square max-h-[300px]"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData1} label dataKey="amount" />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="expenses" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export function Chart2() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Plan 2</CardTitle>
                <CardDescription>60 - 20 - 20</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig2}
                    className="mx-auto aspect-square max-h-[300px]"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData2} label dataKey="amount" />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="expenses" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}