"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Link from "next/link"

const items = [
    {
        id: "housing",
        label: "Housing",
    },
    {
        id: "food",
        label: "Food",
    },
    {
        id: "transportation",
        label: "Transportation",
    },
    {
        id: "healthcare",
        label: "Healthcare",
    },
    {
        id: "entertainment",
        label: "Entertainment",
    },
]

const formSchema = z.object({
    income: z.string()
        .min(1, "Income is required.")
        .regex(/^\d+$/, "Income must be a number."),
    housing: z.string()
        .min(1, "Housing expenses is required.")
        .regex(/^\d+$/, "Housing expenses must be a number."),
    food: z.string()
        .min(1, "Food expenses is required.")
        .regex(/^\d+$/, "Food expenses must be a number."),
    transportation: z.string()
        .min(1, "Transportation expenses is required.")
        .regex(/^\d+$/, "Transportation expenses must be a number."),
    healthcare: z.string()
        .min(1, "Healthcare expenses is required.")
        .regex(/^\d+$/, "Healthcare expenses must be a number."),
    entertainment: z.string()
        .min(1, "Entertainment expenses is required.")
        .regex(/^\d+$/, "Entertainment expenses must be a number."),
})

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Chart1, Chart2 } from "./chart"

export function QuestionForm() {
    const router = useRouter()
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            income: "",
            housing: "",
            food: "",
            transportation: "",
            healthcare: "",
            entertainment: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="w-full max-w-md md:max-w-xl">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="income"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What is your income?</FormLabel>
                                <FormControl>
                                    <Input placeholder="1000" type="number" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your income in THB.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base">Expenses</FormLabel>
                            <FormDescription>Select your expenses.</FormDescription>
                        </div>
                        {items.map((item) => (
                            <FormItem key={item.id} className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-3">
                                    <FormControl>
                                        <Checkbox
                                            checked={selectedItems.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                                setSelectedItems((prev) =>
                                                    checked
                                                        ? [...prev, item.id]
                                                        : prev.filter((value) => value !== item.id)
                                                )
                                                form.setValue(
                                                    item.id as "housing" | "food" | "transportation" | "healthcare" | "entertainment" | "income",
                                                    checked ? form.getValues(item.id as "housing" | "food" | "transportation" | "healthcare" | "entertainment" | "income") : ""
                                                )
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item.label}</FormLabel>
                                </div>
                                {selectedItems.includes(item.id) && (
                                    <FormField
                                        control={form.control}
                                        name={item.id as "income" | "housing" | "food" | "transportation" | "healthcare" | "entertainment"}
                                        render={({ field }) => (
                                            <FormControl>
                                                <Input placeholder={`Enter ${item.label} expenses`} type="number" {...field} />
                                            </FormControl>
                                        )}
                                    />
                                )}
                            </FormItem>
                        ))}
                        <FormMessage />
                    </FormItem>
                    <div className="grid grid-cols-2 gap-4">
                        <Chart1 />
                        <Chart2 />
                    </div>
                    <Link href="/question/submitted">
                        <Button type="submit">Submit</Button>
                    </Link>
                </form>
            </Form>
        </div>
    )
}