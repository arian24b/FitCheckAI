"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { Progress } from "@/components/ui/progress";
import {
  Ruler,
  Weight,
  User2,
  Calculator,
  ChevronRight,
  Activity,
} from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [results, setResults] = useState<{
    idealWeight: number;
    bmi: number;
    classification: string;
    range: { min: number; max: number };
  } | null>(null);

  const calculateResults = () => {
    const heightM = Number(height) / 100;
    const weightKg = Number(weight);

    const idealWeight =
      (Number(height) - 100) * (gender === "male" ? 0.9 : 0.85);
    const bmi = weightKg / (heightM * heightM);
    const range = {
      min: 18.5 * (heightM * heightM),
      max: 24.9 * (heightM * heightM),
    };

    let classification = "";
    if (bmi < 18.5) classification = "Underweight";
    else if (bmi < 25) classification = "Normal";
    else if (bmi < 30) classification = "Overweight";
    else classification = "Obese";

    setResults({
      idealWeight: Number(idealWeight.toFixed(1)),
      bmi: Number(bmi.toFixed(1)),
      classification,
      range: {
        min: Number(range.min.toFixed(1)),
        max: Number(range.max.toFixed(1)),
      },
    });
  };

  const getBmiProgress = (bmi: number) => {
    if (bmi < 18.5) return 20;
    if (bmi < 25) return 40;
    if (bmi < 30) return 70;
    return 100;
  };

  const getBmiColor = (classification: string) => {
    switch (classification) {
      case "Underweight":
        return "text-blue-500";
      case "Normal":
        return "text-green-500";
      case "Overweight":
        return "text-yellow-500";
      case "Obese":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center">
        <div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-1 animate-slide-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="size-5" />
                  Enter Your Details
                </CardTitle>
                <CardDescription>
                  Fill in your measurements to calculate your ideal weight
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    {gender === "male" ? (
                      <User2 className="size-4" />
                    ) : (
                      <User2 className="size-4" />
                    )}
                    Gender
                  </Label>
                  <div className="flex gap-4">
                    <Toggle
                      pressed={gender === "male"}
                      onPressedChange={() => setGender("male")}
                      className="data-[state=on] flex-1 h-10"
                    >
                      <User2 className="size-4 mr-2" />
                      Male
                    </Toggle>
                    <Toggle
                      pressed={gender === "female"}
                      onPressedChange={() => setGender("female")}
                      className="data-[state=on] flex-1 h-10"
                    >
                      <User2 className="size-4 mr-2" />
                      Female
                    </Toggle>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height" className="flex items-center gap-2">
                    <Ruler className="size-4" />
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                    className="h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight" className="flex items-center gap-2">
                    <Weight className="size-4" />
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    className="h-10"
                  />
                </div>

                <Button
                  className="w-full h-10"
                  onClick={calculateResults}
                  disabled={!height || !weight}
                >
                  Calculate Results
                  <ChevronRight className="size-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-1 transition-all duration-300 animate-slide-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="size-5" />
                  Your Results
                </CardTitle>
                <CardDescription>
                  Based on Broca's formula and BMI calculations
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {results ? (
                  <>
                    <div className="bg-muted p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                      <Label className="text-sm">Ideal Weight</Label>
                      <p className="text-3xl font-bold">
                        {results.idealWeight} kg
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>BMI Score</Label>
                      <div className="bg-muted p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <div className="flex items-end gap-2">
                          <p className="text-3xl font-bold">{results.bmi}</p>
                          <p
                            className={`text-lg ${getBmiColor(
                              results.classification
                            )}`}
                          >
                            {results.classification}
                          </p>
                        </div>
                        <Progress
                          value={getBmiProgress(results.bmi)}
                          className="mt-4"
                        />
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                      <Label>Healthy Weight Range</Label>
                      <p className="text-2xl font-semibold">
                        {results.range.min} - {results.range.max} kg
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    Enter your details and click calculate to see your results
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
