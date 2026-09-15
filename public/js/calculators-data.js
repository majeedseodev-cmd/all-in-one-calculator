var ALL_CALCULATORS_DATA = [
  {
    "id": "basic-calculator",
    "title": "Basic Calculator",
    "slug": "basic-calculator",
    "category": "basic-everyday",
    "shortDesc": "Quick arithmetic calculator for addition, subtraction, multiplication, and division.",
    "badge": "popular",
    "fields": [
      {
        "id": "expression",
        "label": "Expression",
        "type": "text",
        "defaultValue": "125 + 75 * 2",
        "placeholder": "e.g. 125 + 75 * 2",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Result = Expression evaluated with standard operator precedence (PEMDAS / BODMAS)",
    "keywords": [
      "basic calculator",
      "math",
      "simple calculator",
      "arithmetic",
      "addition",
      "subtraction",
      "multiplication",
      "division"
    ]
  },
  {
    "id": "scientific-calculator",
    "title": "Scientific Calculator",
    "slug": "scientific-calculator",
    "category": "basic-everyday",
    "shortDesc": "Evaluate trigonometric, logarithmic, and exponential mathematical functions.",
    "badge": "popular",
    "fields": [
      {
        "id": "expression",
        "label": "Expression or Function",
        "type": "text",
        "defaultValue": "sin(30) + sqrt(144)",
        "placeholder": "e.g. sin(30) + sqrt(144)",
        "options": [],
        "unit": ""
      },
      {
        "id": "angleUnit",
        "label": "Angle Mode",
        "type": "select",
        "defaultValue": "deg",
        "placeholder": "",
        "options": [
          {
            "label": "Degrees (deg)",
            "value": "deg"
          },
          {
            "label": "Radians (rad)",
            "value": "rad"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Functions: sin, cos, tan, sqrt, log10, ln, ^ (power), pi, e",
    "keywords": [
      "scientific calculator",
      "trigonometry",
      "sine",
      "cosine",
      "tangent",
      "square root",
      "logarithm",
      "ln"
    ]
  },
  {
    "id": "percentage-calculator",
    "title": "Percentage Calculator",
    "slug": "percentage-calculator",
    "category": "basic-everyday",
    "shortDesc": "Calculate percentages, percentage change, and what percentage one number is of another.",
    "badge": "popular",
    "fields": [
      {
        "id": "mode",
        "label": "Calculation Type",
        "type": "select",
        "defaultValue": "what_is",
        "placeholder": "",
        "options": [
          {
            "label": "What is P% of X?",
            "value": "what_is"
          },
          {
            "label": "X is what % of Y?",
            "value": "x_of_y"
          },
          {
            "label": "Percentage increase/decrease from X to Y",
            "value": "change"
          }
        ],
        "unit": ""
      },
      {
        "id": "val1",
        "label": "First Value (P or X)",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "val2",
        "label": "Second Value (X or Y)",
        "type": "number",
        "defaultValue": 200,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "P% × X = (P / 100) × X  |  % Change = ((Y - X) / X) × 100%",
    "keywords": [
      "percentage calculator",
      "percent",
      "percentage increase",
      "discount",
      "percent of"
    ]
  },
  {
    "id": "fraction-calculator",
    "title": "Fraction Calculator",
    "slug": "fraction-calculator",
    "category": "basic-everyday",
    "shortDesc": "Add, subtract, multiply, and divide fractions with step-by-step reduction.",
    "badge": "",
    "fields": [
      {
        "id": "num1",
        "label": "Numerator 1",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "den1",
        "label": "Denominator 1",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "op",
        "label": "Operation",
        "type": "select",
        "defaultValue": "+",
        "placeholder": "",
        "options": [
          {
            "label": "Add (+)",
            "value": "+"
          },
          {
            "label": "Subtract (-)",
            "value": "-"
          },
          {
            "label": "Multiply (×)",
            "value": "*"
          },
          {
            "label": "Divide (÷)",
            "value": "/"
          }
        ],
        "unit": ""
      },
      {
        "id": "num2",
        "label": "Numerator 2",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "den2",
        "label": "Denominator 2",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      }
    ],
    "formula": "a/b ± c/d = (ad ± bc) / bd  |  (a/b) × (c/d) = ac / bd  |  (a/b) ÷ (c/d) = ad / bc",
    "keywords": [
      "fraction calculator",
      "fractions",
      "numerator",
      "denominator",
      "simplify fraction",
      "mixed numbers"
    ]
  },
  {
    "id": "average-calculator",
    "title": "Average Calculator",
    "slug": "average-calculator",
    "category": "basic-everyday",
    "shortDesc": "Compute the mean, median, mode, and range of any list of numbers.",
    "badge": "",
    "fields": [
      {
        "id": "numbers",
        "label": "Numbers (comma or space separated)",
        "type": "text",
        "defaultValue": "12, 18, 25, 30, 18, 42, 55",
        "placeholder": "e.g. 10, 20, 30, 40",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Mean = (Σ x) / n  |  Range = Max - Min",
    "keywords": [
      "average calculator",
      "mean",
      "median",
      "mode",
      "range",
      "dataset average"
    ]
  },
  {
    "id": "ratio-calculator",
    "title": "Ratio Calculator",
    "slug": "ratio-calculator",
    "category": "basic-everyday",
    "shortDesc": "Simplify ratios and solve for missing values in equivalent ratios A:B = C:D.",
    "badge": "",
    "fields": [
      {
        "id": "a",
        "label": "A",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "b",
        "label": "B",
        "type": "number",
        "defaultValue": 16,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "c",
        "label": "C (optional to solve for D)",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      }
    ],
    "formula": "Simplified: A/GCD : B/GCD  |  Proportion: A / B = C / D => D = (B × C) / A",
    "keywords": [
      "ratio calculator",
      "aspect ratio",
      "proportion",
      "simplify ratio",
      "equivalent ratios"
    ]
  },
  {
    "id": "proportion-calculator",
    "title": "Proportion Calculator",
    "slug": "proportion-calculator",
    "category": "basic-everyday",
    "shortDesc": "Solve direct and inverse proportions across four variables (A / B = C / D).",
    "badge": "",
    "fields": [
      {
        "id": "type",
        "label": "Proportion Type",
        "type": "select",
        "defaultValue": "direct",
        "placeholder": "",
        "options": [
          {
            "label": "Direct Proportion (A/B = C/D)",
            "value": "direct"
          },
          {
            "label": "Inverse Proportion (A × B = C × D)",
            "value": "inverse"
          }
        ],
        "unit": ""
      },
      {
        "id": "a",
        "label": "A",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "b",
        "label": "B",
        "type": "number",
        "defaultValue": 25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "c",
        "label": "C",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "Direct: A/B = C/D => D = (B × C)/A  |  Inverse: A × B = C × D => D = (A × B)/C",
    "keywords": [
      "proportion calculator",
      "direct proportion",
      "inverse proportion",
      "cross multiplication"
    ]
  },
  {
    "id": "random-number-generator",
    "title": "Random Number Generator",
    "slug": "random-number-generator",
    "category": "basic-everyday",
    "shortDesc": "Generate cryptographically random numbers within custom ranges with sorting options.",
    "badge": "",
    "fields": [
      {
        "id": "min",
        "label": "Minimum Value",
        "type": "number",
        "defaultValue": 1,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "max",
        "label": "Maximum Value",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "count",
        "label": "How many numbers?",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 100,
        "step": 1
      },
      {
        "id": "unique",
        "label": "Allow Duplicates",
        "type": "select",
        "defaultValue": "no",
        "placeholder": "",
        "options": [
          {
            "label": "No (Unique numbers)",
            "value": "no"
          },
          {
            "label": "Yes (Allow duplicates)",
            "value": "yes"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Random Integer = floor(Random() × (Max - Min + 1)) + Min",
    "keywords": [
      "random number generator",
      "rng",
      "random picker",
      "lottery generator",
      "dice roll"
    ]
  },
  {
    "id": "number-sequence-calculator",
    "title": "Number Sequence Calculator",
    "slug": "number-sequence-calculator",
    "category": "basic-everyday",
    "shortDesc": "Generate Arithmetic, Geometric, and Fibonacci sequences with sum and nth term.",
    "badge": "",
    "fields": [
      {
        "id": "type",
        "label": "Sequence Type",
        "type": "select",
        "defaultValue": "arithmetic",
        "placeholder": "",
        "options": [
          {
            "label": "Arithmetic Sequence (a, a+d, a+2d...)",
            "value": "arithmetic"
          },
          {
            "label": "Geometric Sequence (a, a*r, a*r²...)",
            "value": "geometric"
          },
          {
            "label": "Fibonacci Sequence",
            "value": "fibonacci"
          }
        ],
        "unit": ""
      },
      {
        "id": "firstTerm",
        "label": "First Term (a)",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "diffOrRatio",
        "label": "Common Difference (d) or Ratio (r)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "terms",
        "label": "Number of terms (n)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 2,
        "max": 50,
        "step": 1
      }
    ],
    "formula": "Arithmetic: a_n = a + (n - 1)d  |  Geometric: a_n = a × r^(n - 1)",
    "keywords": [
      "sequence calculator",
      "arithmetic progression",
      "geometric progression",
      "fibonacci",
      "nth term",
      "series sum"
    ]
  },
  {
    "id": "algebra-calculator",
    "title": "Algebra Calculator",
    "slug": "algebra-calculator",
    "category": "math",
    "shortDesc": "Evaluate and simplify algebraic expressions with variables x, y, and numbers.",
    "badge": "popular",
    "fields": [
      {
        "id": "expr",
        "label": "Expression in terms of x",
        "type": "text",
        "defaultValue": "3*x^2 + 5*x - 12",
        "placeholder": "e.g. 3*x^2 + 5*x - 12",
        "options": [],
        "unit": ""
      },
      {
        "id": "xVal",
        "label": "Value for x",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "f(x) evaluated by replacing x with given numerical value",
    "keywords": [
      "algebra calculator",
      "evaluate polynomial",
      "solve expression",
      "algebra solver"
    ]
  },
  {
    "id": "quadratic-equation-calculator",
    "title": "Quadratic Equation Calculator",
    "slug": "quadratic-equation-calculator",
    "category": "math",
    "shortDesc": "Solve ax² + bx + c = 0 with real/complex roots, discriminant, and vertex.",
    "badge": "popular",
    "fields": [
      {
        "id": "a",
        "label": "Coefficient a",
        "type": "number",
        "defaultValue": 1,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "b",
        "label": "Coefficient b",
        "type": "number",
        "defaultValue": -5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "c",
        "label": "Constant c",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "x = (-b ± √(b² - 4ac)) / (2a)",
    "keywords": [
      "quadratic calculator",
      "quadratic formula",
      "parabola",
      "discriminant",
      "roots of equation"
    ]
  },
  {
    "id": "linear-equation-calculator",
    "title": "Linear Equation Calculator",
    "slug": "linear-equation-calculator",
    "category": "math",
    "shortDesc": "Solve 1-variable equations (ax + b = c) and 2-variable systems of equations.",
    "badge": "",
    "fields": [
      {
        "id": "a",
        "label": "Coefficient a (in ax + b = c)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "b",
        "label": "Value b",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "c",
        "label": "Right Hand Side c",
        "type": "number",
        "defaultValue": 45,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "ax + b = c  =>  x = (c - b) / a",
    "keywords": [
      "linear equation solver",
      "solve for x",
      "first degree equation",
      "algebra"
    ]
  },
  {
    "id": "equation-calculator",
    "title": "Equation Calculator",
    "slug": "equation-calculator",
    "category": "math",
    "shortDesc": "Solve algebraic equations and systems of equations quickly.",
    "badge": "",
    "fields": [
      {
        "id": "equation",
        "label": "Equation (e.g. 2*x + 7 = 21)",
        "type": "text",
        "defaultValue": "2*x + 7 = 21",
        "placeholder": "e.g. 2*x + 7 = 21",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "LHS(x) = RHS(x)  =>  Solve for x",
    "keywords": [
      "equation solver",
      "solve equation",
      "algebraic solver"
    ]
  },
  {
    "id": "exponent-calculator",
    "title": "Exponent Calculator",
    "slug": "exponent-calculator",
    "category": "math",
    "shortDesc": "Compute base raised to positive, negative, and fractional exponents (b^x).",
    "badge": "",
    "fields": [
      {
        "id": "base",
        "label": "Base (b)",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "exponent",
        "label": "Exponent (x)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "b^x = b × b × ... (x times)",
    "keywords": [
      "exponent calculator",
      "power calculator",
      "base power",
      "scientific power"
    ]
  },
  {
    "id": "square-root-calculator",
    "title": "Square Root Calculator",
    "slug": "square-root-calculator",
    "category": "math",
    "shortDesc": "Calculate the principal square root and simplified radical form of any number.",
    "badge": "",
    "fields": [
      {
        "id": "number",
        "label": "Number",
        "type": "number",
        "defaultValue": 144,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 0.1
      }
    ],
    "formula": "√x = y such that y² = x and y ≥ 0",
    "keywords": [
      "square root calculator",
      "sqrt",
      "radical",
      "perfect square"
    ]
  },
  {
    "id": "cube-root-calculator",
    "title": "Cube Root Calculator",
    "slug": "cube-root-calculator",
    "category": "math",
    "shortDesc": "Find the cube root ∛x of any positive or negative real number.",
    "badge": "",
    "fields": [
      {
        "id": "number",
        "label": "Number (x)",
        "type": "number",
        "defaultValue": 125,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "∛x = y such that y³ = x",
    "keywords": [
      "cube root calculator",
      "cbrt",
      "cube",
      "perfect cube"
    ]
  },
  {
    "id": "logarithm-calculator",
    "title": "Logarithm Calculator",
    "slug": "logarithm-calculator",
    "category": "math",
    "shortDesc": "Calculate logarithm with any base b, natural logarithm (ln), and common log (log10).",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Value (x)",
        "type": "number",
        "defaultValue": 1000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.00001,
        "step": 0.1
      },
      {
        "id": "base",
        "label": "Base (b)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.00001,
        "step": 0.1
      }
    ],
    "formula": "log_b(x) = ln(x) / ln(b)",
    "keywords": [
      "logarithm calculator",
      "log10",
      "ln calculator",
      "natural logarithm",
      "change of base"
    ]
  },
  {
    "id": "factorial-calculator",
    "title": "Factorial Calculator",
    "slug": "factorial-calculator",
    "category": "math",
    "shortDesc": "Compute n! factorial and permutations with exact digits.",
    "badge": "",
    "fields": [
      {
        "id": "n",
        "label": "Number (n)",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 170,
        "step": 1
      }
    ],
    "formula": "n! = n × (n - 1) × (n - 2) × ... × 1",
    "keywords": [
      "factorial calculator",
      "n!",
      "permutations",
      "combinatorics"
    ]
  },
  {
    "id": "gcd-calculator",
    "title": "GCD Calculator (Greatest Common Divisor)",
    "slug": "gcd-calculator",
    "category": "math",
    "shortDesc": "Find the Greatest Common Divisor (GCD / HCF) of two or more numbers with Euclidean steps.",
    "badge": "",
    "fields": [
      {
        "id": "numbers",
        "label": "Numbers (comma separated)",
        "type": "text",
        "defaultValue": "48, 180, 240",
        "placeholder": "e.g. 48, 180",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "GCD(a, b) = GCD(b, a mod b) until remainder is 0",
    "keywords": [
      "gcd calculator",
      "hcf",
      "greatest common divisor",
      "highest common factor",
      "euclidean algorithm"
    ]
  },
  {
    "id": "lcm-calculator",
    "title": "LCM Calculator (Least Common Multiple)",
    "slug": "lcm-calculator",
    "category": "math",
    "shortDesc": "Find the Least Common Multiple (LCM) of two or more numbers.",
    "badge": "",
    "fields": [
      {
        "id": "numbers",
        "label": "Numbers (comma separated)",
        "type": "text",
        "defaultValue": "12, 15, 20",
        "placeholder": "e.g. 12, 15, 20",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "LCM(a, b) = (|a × b|) / GCD(a, b)",
    "keywords": [
      "lcm calculator",
      "least common multiple",
      "common denominator",
      "lcd"
    ]
  },
  {
    "id": "prime-number-calculator",
    "title": "Prime Number Calculator",
    "slug": "prime-number-calculator",
    "category": "math",
    "shortDesc": "Check if a number is prime and compute its prime factorization.",
    "badge": "",
    "fields": [
      {
        "id": "number",
        "label": "Integer (n)",
        "type": "number",
        "defaultValue": 97,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      }
    ],
    "formula": "Prime if only divisors are 1 and n",
    "keywords": [
      "prime calculator",
      "prime checker",
      "prime factors",
      "composite number"
    ]
  },
  {
    "id": "percentage-change-calculator",
    "title": "Percentage Change Calculator",
    "slug": "percentage-change-calculator",
    "category": "math",
    "shortDesc": "Calculate absolute and relative percentage increase or decrease between two values.",
    "badge": "",
    "fields": [
      {
        "id": "oldVal",
        "label": "Initial / Old Value",
        "type": "number",
        "defaultValue": 120,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "newVal",
        "label": "Final / New Value",
        "type": "number",
        "defaultValue": 150,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "% Change = ((New - Old) / |Old|) × 100%",
    "keywords": [
      "percentage change",
      "percentage increase",
      "percentage decrease",
      "growth rate"
    ]
  },
  {
    "id": "absolute-value-calculator",
    "title": "Absolute Value Calculator",
    "slug": "absolute-value-calculator",
    "category": "math",
    "shortDesc": "Compute the absolute value |x| representing distance from zero.",
    "badge": "",
    "fields": [
      {
        "id": "number",
        "label": "Number (x)",
        "type": "number",
        "defaultValue": -42.75,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.01
      }
    ],
    "formula": "|x| = x if x ≥ 0, or -x if x < 0",
    "keywords": [
      "absolute value calculator",
      "|x|",
      "modulus",
      "distance from zero"
    ]
  },
  {
    "id": "modulo-calculator",
    "title": "Modulo Calculator",
    "slug": "modulo-calculator",
    "category": "math",
    "shortDesc": "Calculate remainder and quotient of integer division a mod n.",
    "badge": "",
    "fields": [
      {
        "id": "a",
        "label": "Dividend (a)",
        "type": "number",
        "defaultValue": 29,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "n",
        "label": "Divisor / Modulus (n)",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      }
    ],
    "formula": "a = q × n + r, where 0 ≤ r < |n|",
    "keywords": [
      "modulo calculator",
      "mod",
      "remainder calculator",
      "integer division"
    ]
  },
  {
    "id": "permutation-calculator",
    "title": "Permutation Calculator",
    "slug": "permutation-calculator",
    "category": "math",
    "shortDesc": "Calculate P(n, r) permutations where order of selection matters.",
    "badge": "",
    "fields": [
      {
        "id": "n",
        "label": "Total items (n)",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 20,
        "step": 1
      },
      {
        "id": "r",
        "label": "Items to select (r)",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 20,
        "step": 1
      }
    ],
    "formula": "P(n, r) = n! / (n - r)!",
    "keywords": [
      "permutation calculator",
      "P(n,r)",
      "arrangements",
      "combinatorics"
    ]
  },
  {
    "id": "combination-calculator",
    "title": "Combination Calculator",
    "slug": "combination-calculator",
    "category": "math",
    "shortDesc": "Calculate C(n, r) or nCr combinations where order does NOT matter.",
    "badge": "",
    "fields": [
      {
        "id": "n",
        "label": "Total items (n)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 30,
        "step": 1
      },
      {
        "id": "r",
        "label": "Items to select (r)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 30,
        "step": 1
      }
    ],
    "formula": "C(n, r) = n! / (r! × (n - r)!)",
    "keywords": [
      "combination calculator",
      "nCr",
      "combinations",
      "choose"
    ]
  },
  {
    "id": "probability-calculator",
    "title": "Probability Calculator",
    "slug": "probability-calculator",
    "category": "math",
    "shortDesc": "Compute probability of single events, independent events, and odds.",
    "badge": "",
    "fields": [
      {
        "id": "favorable",
        "label": "Favorable Outcomes (A)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      },
      {
        "id": "total",
        "label": "Total Possible Outcomes (S)",
        "type": "number",
        "defaultValue": 52,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      }
    ],
    "formula": "P(A) = n(A) / n(S)",
    "keywords": [
      "probability calculator",
      "odds",
      "chance",
      "sample space"
    ]
  },
  {
    "id": "sequence-calculator",
    "title": "Sequence Calculator",
    "slug": "sequence-calculator",
    "category": "math",
    "shortDesc": "Calculate general mathematical sequences, recurrence relations, and series sums.",
    "badge": "",
    "fields": [
      {
        "id": "first",
        "label": "First Term (a₁)",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "diff",
        "label": "Difference / Multiplier",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "count",
        "label": "Number of terms",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 25,
        "step": 1
      }
    ],
    "formula": "a_n = a₁ + (n - 1)d",
    "keywords": [
      "sequence calculator",
      "series",
      "progression",
      "series sum"
    ]
  },
  {
    "id": "matrix-calculator",
    "title": "Matrix Calculator",
    "slug": "matrix-calculator",
    "category": "math",
    "shortDesc": "Compute 2x2 determinant, inverse, trace, and eigenvalues.",
    "badge": "",
    "fields": [
      {
        "id": "a11",
        "label": "Element a11",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "a12",
        "label": "Element a12",
        "type": "number",
        "defaultValue": 7,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "a21",
        "label": "Element a21",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "a22",
        "label": "Element a22",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "det(A) = ad - bc  |  A⁻¹ = (1/det) × [[d, -b], [-c, a]]",
    "keywords": [
      "matrix calculator",
      "determinant",
      "inverse matrix",
      "matrix 2x2",
      "linear algebra"
    ]
  },
  {
    "id": "scientific-notation-calculator",
    "title": "Scientific Notation Calculator",
    "slug": "scientific-notation-calculator",
    "category": "math",
    "shortDesc": "Convert numbers to scientific notation (a × 10^b) and perform operations.",
    "badge": "",
    "fields": [
      {
        "id": "number",
        "label": "Decimal or Standard Number",
        "type": "text",
        "defaultValue": "149600000",
        "placeholder": "e.g. 149600000 or 0.000045",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "N = a × 10^b where 1 ≤ |a| < 10 and b is an integer",
    "keywords": [
      "scientific notation",
      "standard form",
      "powers of 10",
      "engineering notation"
    ]
  },
  {
    "id": "area-calculator",
    "title": "Area Calculator",
    "slug": "area-calculator",
    "category": "geometry",
    "shortDesc": "Compute area for circle, rectangle, triangle, and trapezoid shapes.",
    "badge": "popular",
    "fields": [
      {
        "id": "shape",
        "label": "Select Shape",
        "type": "select",
        "defaultValue": "rectangle",
        "placeholder": "",
        "options": [
          {
            "label": "Rectangle (Length × Width)",
            "value": "rectangle"
          },
          {
            "label": "Circle (π × r²)",
            "value": "circle"
          },
          {
            "label": "Triangle (0.5 × Base × Height)",
            "value": "triangle"
          },
          {
            "label": "Trapezoid (0.5 × (a + b) × Height)",
            "value": "trapezoid"
          }
        ],
        "unit": ""
      },
      {
        "id": "d1",
        "label": "Dimension 1 (Length / Radius / Base / Base a)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "d2",
        "label": "Dimension 2 (Width / Height / Base b)",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "d3",
        "label": "Dimension 3 (Trapezoid Height)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Area formulas: Rectangle = l×w | Circle = πr² | Triangle = ½bh",
    "keywords": [
      "area calculator",
      "surface area",
      "circle area",
      "triangle area",
      "rectangle area"
    ]
  },
  {
    "id": "perimeter-calculator",
    "title": "Perimeter Calculator",
    "slug": "perimeter-calculator",
    "category": "geometry",
    "shortDesc": "Compute the perimeter and circumference of 2D geometric shapes.",
    "badge": "",
    "fields": [
      {
        "id": "shape",
        "label": "Select Shape",
        "type": "select",
        "defaultValue": "rectangle",
        "placeholder": "",
        "options": [
          {
            "label": "Rectangle (2 × (l + w))",
            "value": "rectangle"
          },
          {
            "label": "Circle (2 × π × r)",
            "value": "circle"
          },
          {
            "label": "Square (4 × s)",
            "value": "square"
          },
          {
            "label": "Triangle (a + b + c)",
            "value": "triangle"
          }
        ],
        "unit": ""
      },
      {
        "id": "side1",
        "label": "Side 1 / Radius / Length",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "side2",
        "label": "Side 2 / Width",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "side3",
        "label": "Side 3 (Triangle)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Rectangle: 2(l + w) | Circle: 2πr | Square: 4s | Triangle: a + b + c",
    "keywords": [
      "perimeter calculator",
      "circumference",
      "boundary",
      "perimeter of rectangle"
    ]
  },
  {
    "id": "circle-calculator",
    "title": "Circle Calculator",
    "slug": "circle-calculator",
    "category": "geometry",
    "shortDesc": "Compute circle radius, diameter, circumference, and area from any single dimension.",
    "badge": "popular",
    "fields": [
      {
        "id": "radius",
        "label": "Circle Radius (r)",
        "type": "number",
        "defaultValue": 7,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      }
    ],
    "formula": "A = πr²  |  C = 2πr  |  d = 2r",
    "keywords": [
      "circle calculator",
      "circle area",
      "circumference",
      "diameter",
      "radius"
    ]
  },
  {
    "id": "triangle-calculator",
    "title": "Triangle Calculator",
    "slug": "triangle-calculator",
    "category": "geometry",
    "shortDesc": "Calculate area, perimeter, semiperimeter, and angles using Heron formula.",
    "badge": "",
    "fields": [
      {
        "id": "a",
        "label": "Side a",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "b",
        "label": "Side b",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "c",
        "label": "Side c",
        "type": "number",
        "defaultValue": 7,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      }
    ],
    "formula": "Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2",
    "keywords": [
      "triangle calculator",
      "heron formula",
      "triangle area",
      "law of cosines"
    ]
  },
  {
    "id": "rectangle-calculator",
    "title": "Rectangle Calculator",
    "slug": "rectangle-calculator",
    "category": "geometry",
    "shortDesc": "Compute rectangle area, perimeter, and diagonal length.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Length",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "width",
        "label": "Width",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Area = l × w  |  Perimeter = 2(l + w)  |  Diagonal = √(l² + w²)",
    "keywords": [
      "rectangle calculator",
      "rectangle area",
      "diagonal of rectangle",
      "perimeter"
    ]
  },
  {
    "id": "square-calculator",
    "title": "Square Calculator",
    "slug": "square-calculator",
    "category": "geometry",
    "shortDesc": "Compute square area, perimeter, and diagonal from side length.",
    "badge": "",
    "fields": [
      {
        "id": "side",
        "label": "Side Length (s)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Area = s²  |  Perimeter = 4s  |  Diagonal = s√2",
    "keywords": [
      "square calculator",
      "square area",
      "diagonal of square",
      "perimeter"
    ]
  },
  {
    "id": "trapezoid-calculator",
    "title": "Trapezoid Calculator",
    "slug": "trapezoid-calculator",
    "category": "geometry",
    "shortDesc": "Calculate the area and perimeter of a trapezoid from bases and height.",
    "badge": "",
    "fields": [
      {
        "id": "a",
        "label": "Base a",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "b",
        "label": "Base b",
        "type": "number",
        "defaultValue": 14,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "h",
        "label": "Height (h)",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Area = ((a + b) / 2) × h",
    "keywords": [
      "trapezoid calculator",
      "trapezoid area",
      "trapezium",
      "quadrilateral"
    ]
  },
  {
    "id": "parallelogram-calculator",
    "title": "Parallelogram Calculator",
    "slug": "parallelogram-calculator",
    "category": "geometry",
    "shortDesc": "Compute parallelogram area and perimeter from base, height, and side.",
    "badge": "",
    "fields": [
      {
        "id": "base",
        "label": "Base (b)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "height",
        "label": "Height (h)",
        "type": "number",
        "defaultValue": 7,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "side",
        "label": "Side length (a)",
        "type": "number",
        "defaultValue": 9,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Area = base × height  |  Perimeter = 2(base + side)",
    "keywords": [
      "parallelogram calculator",
      "parallelogram area",
      "perimeter of parallelogram"
    ]
  },
  {
    "id": "polygon-calculator",
    "title": "Regular Polygon Calculator",
    "slug": "polygon-calculator",
    "category": "geometry",
    "shortDesc": "Calculate area, perimeter, and apothem of any regular n-sided polygon.",
    "badge": "",
    "fields": [
      {
        "id": "n",
        "label": "Number of sides (n)",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 3,
        "max": 100,
        "step": 1
      },
      {
        "id": "s",
        "label": "Side Length (s)",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Area = (n × s × a) / 2 where a = s / (2 tan(π / n))",
    "keywords": [
      "polygon calculator",
      "hexagon area",
      "pentagon area",
      "regular polygon",
      "apothem"
    ]
  },
  {
    "id": "cube-calculator",
    "title": "Cube Calculator",
    "slug": "cube-calculator",
    "category": "geometry",
    "shortDesc": "Compute volume, total surface area, and space diagonal of a cube.",
    "badge": "",
    "fields": [
      {
        "id": "side",
        "label": "Side Length (a)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Volume = a³  |  Surface Area = 6a²  |  Space Diagonal = a√3",
    "keywords": [
      "cube calculator",
      "cube volume",
      "cube surface area",
      "space diagonal"
    ]
  },
  {
    "id": "cuboid-calculator",
    "title": "Cuboid Calculator",
    "slug": "cuboid-calculator",
    "category": "geometry",
    "shortDesc": "Compute volume and surface area of a rectangular prism / cuboid.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Length (l)",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "width",
        "label": "Width (w)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "height",
        "label": "Height (h)",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "V = l × w × h  |  SA = 2(lw + lh + wh)",
    "keywords": [
      "cuboid calculator",
      "rectangular prism",
      "box volume",
      "surface area"
    ]
  },
  {
    "id": "sphere-calculator",
    "title": "Sphere Calculator",
    "slug": "sphere-calculator",
    "category": "geometry",
    "shortDesc": "Calculate sphere volume, surface area, and circumference from radius.",
    "badge": "",
    "fields": [
      {
        "id": "radius",
        "label": "Radius (r)",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "Volume = (4/3)πr³  |  Surface Area = 4πr²",
    "keywords": [
      "sphere calculator",
      "sphere volume",
      "surface area of sphere",
      "ball volume"
    ]
  },
  {
    "id": "cylinder-calculator",
    "title": "Cylinder Calculator",
    "slug": "cylinder-calculator",
    "category": "geometry",
    "shortDesc": "Compute cylinder volume, lateral area, and total surface area.",
    "badge": "",
    "fields": [
      {
        "id": "radius",
        "label": "Base Radius (r)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "height",
        "label": "Height (h)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "V = πr²h  |  Lateral SA = 2πrh  |  Total SA = 2πrh + 2πr²",
    "keywords": [
      "cylinder calculator",
      "cylinder volume",
      "cylinder surface area",
      "tank capacity"
    ]
  },
  {
    "id": "cone-calculator",
    "title": "Cone Calculator",
    "slug": "cone-calculator",
    "category": "geometry",
    "shortDesc": "Compute cone volume, slant height, and surface area from radius and height.",
    "badge": "",
    "fields": [
      {
        "id": "radius",
        "label": "Base Radius (r)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "height",
        "label": "Height (h)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "V = (1/3)πr²h  |  s = √(r² + h²)  |  Total SA = πr(r + s)",
    "keywords": [
      "cone calculator",
      "cone volume",
      "slant height",
      "cone surface area"
    ]
  },
  {
    "id": "pyramid-calculator",
    "title": "Pyramid Calculator",
    "slug": "pyramid-calculator",
    "category": "geometry",
    "shortDesc": "Calculate right rectangular pyramid volume and surface area.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Base Length (l)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "width",
        "label": "Base Width (w)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      },
      {
        "id": "height",
        "label": "Height (h)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "V = (Base Area × h) / 3",
    "keywords": [
      "pyramid calculator",
      "pyramid volume",
      "pyramid surface area"
    ]
  },
  {
    "id": "loan-calculator",
    "title": "Loan Calculator",
    "slug": "loan-calculator",
    "category": "finance",
    "shortDesc": "Compute monthly payment, total interest, and total repayment on any loan.",
    "badge": "popular",
    "fields": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "type": "number",
        "defaultValue": 25000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 100,
        "step": 100
      },
      {
        "id": "rate",
        "label": "Annual Interest Rate (%)",
        "type": "number",
        "defaultValue": 6.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "max": 40,
        "step": 0.1
      },
      {
        "id": "termYears",
        "label": "Loan Term (Years)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 30,
        "step": 1
      }
    ],
    "formula": "M = P × [r(1 + r)^n] / [(1 + r)^n - 1]",
    "keywords": [
      "loan calculator",
      "auto loan",
      "personal loan",
      "monthly payment",
      "interest paid"
    ]
  },
  {
    "id": "emi-calculator",
    "title": "EMI Calculator",
    "slug": "emi-calculator",
    "category": "finance",
    "shortDesc": "Calculate Equated Monthly Installments (EMI) for car, personal, or home loans.",
    "badge": "popular",
    "fields": [
      {
        "id": "amount",
        "label": "Loan Amount",
        "type": "number",
        "defaultValue": 50000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1000,
        "step": 500
      },
      {
        "id": "interest",
        "label": "Interest Rate (% per annum)",
        "type": "number",
        "defaultValue": 8.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "tenureMonths",
        "label": "Tenure (in Months)",
        "type": "number",
        "defaultValue": 36,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 3,
        "max": 360,
        "step": 1
      }
    ],
    "formula": "EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]",
    "keywords": [
      "emi calculator",
      "car loan emi",
      "home loan emi",
      "monthly installment"
    ]
  },
  {
    "id": "mortgage-calculator",
    "title": "Mortgage Calculator",
    "slug": "mortgage-calculator",
    "category": "finance",
    "shortDesc": "Comprehensive home mortgage calculator including property tax, home insurance, and PMI.",
    "badge": "popular",
    "fields": [
      {
        "id": "homePrice",
        "label": "Home Purchase Price ($)",
        "type": "number",
        "defaultValue": 400000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 10000,
        "step": 5000
      },
      {
        "id": "downPaymentPct",
        "label": "Down Payment (%)",
        "type": "number",
        "defaultValue": 20,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 99,
        "step": 1
      },
      {
        "id": "interestRate",
        "label": "Interest Rate (%)",
        "type": "number",
        "defaultValue": 6.8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "termYears",
        "label": "Loan Term (Years)",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "max": 40,
        "step": 5
      },
      {
        "id": "propertyTaxAnnual",
        "label": "Annual Property Tax ($)",
        "type": "number",
        "defaultValue": 4800,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 100
      },
      {
        "id": "homeInsuranceAnnual",
        "label": "Annual Homeowners Insurance ($)",
        "type": "number",
        "defaultValue": 1200,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 50
      }
    ],
    "formula": "Monthly = P&I + Property Taxes + Home Insurance + PMI",
    "keywords": [
      "mortgage calculator",
      "home loan",
      "piti payment",
      "property tax",
      "pmi"
    ]
  },
  {
    "id": "compound-interest-calculator",
    "title": "Compound Interest Calculator",
    "slug": "compound-interest-calculator",
    "category": "finance",
    "shortDesc": "Compute future wealth growth with compounding interest and regular monthly deposits.",
    "badge": "popular",
    "fields": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "type": "number",
        "defaultValue": 10000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      },
      {
        "id": "monthlyContribution",
        "label": "Monthly Contribution ($)",
        "type": "number",
        "defaultValue": 500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 50
      },
      {
        "id": "annualRate",
        "label": "Estimated Annual Return (%)",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "years",
        "label": "Investment Timeframe (Years)",
        "type": "number",
        "defaultValue": 20,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 60,
        "step": 1
      }
    ],
    "formula": "FV = P(1 + r/n)^(nt) + PMT × [((1 + r/n)^(nt) - 1) / (r/n)]",
    "keywords": [
      "compound interest calculator",
      "future value",
      "wealth builder",
      "investment growth"
    ]
  },
  {
    "id": "simple-interest-calculator",
    "title": "Simple Interest Calculator",
    "slug": "simple-interest-calculator",
    "category": "finance",
    "shortDesc": "Compute basic non-compounding interest with formula I = P × r × t.",
    "badge": "",
    "fields": [
      {
        "id": "principal",
        "label": "Principal Amount ($)",
        "type": "number",
        "defaultValue": 5000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 100
      },
      {
        "id": "rate",
        "label": "Annual Interest Rate (%)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "time",
        "label": "Time Period (Years)",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      }
    ],
    "formula": "I = P × r × t  |  A = P + I",
    "keywords": [
      "simple interest",
      "I=Prt",
      "interest rate",
      "finance"
    ]
  },
  {
    "id": "interest-calculator",
    "title": "Interest Calculator",
    "slug": "interest-calculator",
    "category": "finance",
    "shortDesc": "Side-by-side comparison between Simple and Compound Interest.",
    "badge": "",
    "fields": [
      {
        "id": "principal",
        "label": "Principal ($)",
        "type": "number",
        "defaultValue": 10000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 500
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "type": "number",
        "defaultValue": 7,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      }
    ],
    "formula": "Compare: P(1 + rt) vs P(1 + r)^t",
    "keywords": [
      "interest calculator",
      "compare interest",
      "compound vs simple"
    ]
  },
  {
    "id": "investment-calculator",
    "title": "Investment Calculator",
    "slug": "investment-calculator",
    "category": "finance",
    "shortDesc": "Forecast portfolio growth, asset returns, and capital accumulation.",
    "badge": "",
    "fields": [
      {
        "id": "initial",
        "label": "Starting Capital ($)",
        "type": "number",
        "defaultValue": 15000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      },
      {
        "id": "monthly",
        "label": "Monthly Additions ($)",
        "type": "number",
        "defaultValue": 750,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 100
      },
      {
        "id": "returnRate",
        "label": "Expected Annual Return (%)",
        "type": "number",
        "defaultValue": 9,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      }
    ],
    "formula": "FV = P(1+r)^n + PMT[((1+r)^n - 1)/r]",
    "keywords": [
      "investment calculator",
      "portfolio growth",
      "stock returns",
      "wealth builder"
    ]
  },
  {
    "id": "savings-calculator",
    "title": "Savings Goal Calculator",
    "slug": "savings-calculator",
    "category": "finance",
    "shortDesc": "Find out how much to save monthly or how long to reach your savings target.",
    "badge": "",
    "fields": [
      {
        "id": "target",
        "label": "Savings Goal Target ($)",
        "type": "number",
        "defaultValue": 50000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 100,
        "step": 1000
      },
      {
        "id": "current",
        "label": "Current Savings ($)",
        "type": "number",
        "defaultValue": 5000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      },
      {
        "id": "years",
        "label": "Target Time (Years)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "interest",
        "label": "Savings APY (%)",
        "type": "number",
        "defaultValue": 4.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 0.1
      }
    ],
    "formula": "PMT = (Target - P(1+r)^n) × [r / ((1+r)^n - 1)]",
    "keywords": [
      "savings goal calculator",
      "target savings",
      "emergency fund",
      "monthly savings"
    ]
  },
  {
    "id": "retirement-calculator",
    "title": "Retirement Calculator",
    "slug": "retirement-calculator",
    "category": "finance",
    "shortDesc": "Plan your retirement nest egg, required savings, and safe monthly withdrawal income.",
    "badge": "popular",
    "fields": [
      {
        "id": "currentAge",
        "label": "Current Age",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 18,
        "max": 75,
        "step": 1
      },
      {
        "id": "retireAge",
        "label": "Retirement Age",
        "type": "number",
        "defaultValue": 65,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "max": 85,
        "step": 1
      },
      {
        "id": "currentSavings",
        "label": "Current Retirement Savings ($)",
        "type": "number",
        "defaultValue": 25000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 5000
      },
      {
        "id": "monthlySavings",
        "label": "Monthly Savings ($)",
        "type": "number",
        "defaultValue": 600,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 50
      },
      {
        "id": "returnRate",
        "label": "Pre-Retirement Annual Return (%)",
        "type": "number",
        "defaultValue": 7.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      }
    ],
    "formula": "Nest Egg = P(1+r)^n + PMT[((1+r)^n - 1)/r]  |  Annual Income = Nest Egg × 4%",
    "keywords": [
      "retirement calculator",
      "401k calculator",
      "nest egg",
      "pension",
      "fire movement"
    ]
  },
  {
    "id": "inflation-calculator",
    "title": "Inflation Calculator",
    "slug": "inflation-calculator",
    "category": "finance",
    "shortDesc": "Compute future purchasing power and price erosion due to annual inflation.",
    "badge": "",
    "fields": [
      {
        "id": "amount",
        "label": "Current Amount ($)",
        "type": "number",
        "defaultValue": 1000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 50
      },
      {
        "id": "inflationRate",
        "label": "Average Annual Inflation (%)",
        "type": "number",
        "defaultValue": 3.2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "years",
        "label": "Number of Years",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      }
    ],
    "formula": "Future Cost = Present Cost × (1 + i)^t",
    "keywords": [
      "inflation calculator",
      "purchasing power",
      "cost of living",
      "cpi"
    ]
  },
  {
    "id": "roi-calculator",
    "title": "ROI Calculator (Return on Investment)",
    "slug": "roi-calculator",
    "category": "finance",
    "shortDesc": "Compute total ROI percentage, annualized ROI, and net profit from an investment.",
    "badge": "popular",
    "fields": [
      {
        "id": "invested",
        "label": "Amount Invested ($)",
        "type": "number",
        "defaultValue": 10000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 500
      },
      {
        "id": "returned",
        "label": "Amount Returned ($)",
        "type": "number",
        "defaultValue": 15500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      },
      {
        "id": "years",
        "label": "Holding Period (Years)",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      }
    ],
    "formula": "ROI = ((Gain - Cost) / Cost) × 100%  |  Annualized = ((Gain/Cost)^(1/t) - 1) × 100%",
    "keywords": [
      "roi calculator",
      "return on investment",
      "annualized return",
      "cagr",
      "investment profit"
    ]
  },
  {
    "id": "profit-calculator",
    "title": "Profit Calculator",
    "slug": "profit-calculator",
    "category": "finance",
    "shortDesc": "Calculate gross profit, net profit, and profit margin from cost and revenue.",
    "badge": "",
    "fields": [
      {
        "id": "revenue",
        "label": "Total Revenue ($)",
        "type": "number",
        "defaultValue": 50000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      },
      {
        "id": "cost",
        "label": "Total Cost / Expenses ($)",
        "type": "number",
        "defaultValue": 32000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      }
    ],
    "formula": "Profit = Revenue - Cost  |  Margin = (Profit / Revenue) × 100%",
    "keywords": [
      "profit calculator",
      "net profit",
      "gross profit",
      "business margin"
    ]
  },
  {
    "id": "loss-calculator",
    "title": "Loss Calculator",
    "slug": "loss-calculator",
    "category": "finance",
    "shortDesc": "Compute financial loss and percentage loss when selling price is below cost.",
    "badge": "",
    "fields": [
      {
        "id": "cost",
        "label": "Cost Price ($)",
        "type": "number",
        "defaultValue": 1200,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 50
      },
      {
        "id": "selling",
        "label": "Selling Price ($)",
        "type": "number",
        "defaultValue": 900,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 50
      }
    ],
    "formula": "Loss = Cost Price - Selling Price  |  % Loss = (Loss / Cost Price) × 100%",
    "keywords": [
      "loss calculator",
      "percentage loss",
      "capital loss",
      "cost price"
    ]
  },
  {
    "id": "profit-margin-calculator",
    "title": "Profit Margin Calculator",
    "slug": "profit-margin-calculator",
    "category": "finance",
    "shortDesc": "Compute gross margin, markup, and revenue from cost and margin goals.",
    "badge": "",
    "fields": [
      {
        "id": "cost",
        "label": "Item Cost ($)",
        "type": "number",
        "defaultValue": 45,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "revenue",
        "label": "Selling Price ($)",
        "type": "number",
        "defaultValue": 75,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      }
    ],
    "formula": "Margin = ((Selling Price - Cost) / Selling Price) × 100%",
    "keywords": [
      "profit margin",
      "gross margin",
      "margin calculator",
      "retail pricing"
    ]
  },
  {
    "id": "markup-calculator",
    "title": "Markup Calculator",
    "slug": "markup-calculator",
    "category": "finance",
    "shortDesc": "Find selling price and profit given cost and desired markup percentage.",
    "badge": "",
    "fields": [
      {
        "id": "cost",
        "label": "Cost of Goods ($)",
        "type": "number",
        "defaultValue": 60,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "markup",
        "label": "Desired Markup (%)",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      }
    ],
    "formula": "Selling Price = Cost × (1 + Markup / 100)",
    "keywords": [
      "markup calculator",
      "pricing calculator",
      "retail markup",
      "profit"
    ]
  },
  {
    "id": "discount-calculator",
    "title": "Discount Calculator",
    "slug": "discount-calculator",
    "category": "finance",
    "shortDesc": "Calculate sale price, total savings, and sales tax on discounted purchases.",
    "badge": "popular",
    "fields": [
      {
        "id": "originalPrice",
        "label": "Original Price ($)",
        "type": "number",
        "defaultValue": 120,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "discountPct",
        "label": "Discount Percentage (%)",
        "type": "number",
        "defaultValue": 25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "id": "taxPct",
        "label": "Sales Tax Rate (%) (optional)",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 0.1
      }
    ],
    "formula": "Final = (Original - Savings) × (1 + Tax Rate)",
    "keywords": [
      "discount calculator",
      "sale price",
      "clearance",
      "black friday",
      "savings"
    ]
  },
  {
    "id": "tax-calculator",
    "title": "Income Tax Calculator",
    "slug": "tax-calculator",
    "category": "finance",
    "shortDesc": "Estimate federal income tax, effective tax rate, and take-home pay.",
    "badge": "",
    "fields": [
      {
        "id": "grossIncome",
        "label": "Gross Annual Income ($)",
        "type": "number",
        "defaultValue": 75000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      },
      {
        "id": "filingStatus",
        "label": "Filing Status",
        "type": "select",
        "defaultValue": "single",
        "placeholder": "",
        "options": [
          {
            "label": "Single",
            "value": "single"
          },
          {
            "label": "Married Filing Jointly",
            "value": "married"
          }
        ],
        "unit": ""
      },
      {
        "id": "deductions",
        "label": "Other Deductions ($)",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      }
    ],
    "formula": "Tax = Sum(Taxable in Bracket × Bracket Rate)",
    "keywords": [
      "tax calculator",
      "income tax",
      "effective tax rate",
      "paycheck tax"
    ]
  },
  {
    "id": "vat-calculator",
    "title": "VAT Calculator (Value Added Tax)",
    "slug": "vat-calculator",
    "category": "finance",
    "shortDesc": "Add or remove VAT to find net price, gross price, and VAT amount.",
    "badge": "",
    "fields": [
      {
        "id": "mode",
        "label": "Mode",
        "type": "select",
        "defaultValue": "add",
        "placeholder": "",
        "options": [
          {
            "label": "Add VAT (Net to Gross)",
            "value": "add"
          },
          {
            "label": "Remove VAT (Gross to Net)",
            "value": "remove"
          }
        ],
        "unit": ""
      },
      {
        "id": "amount",
        "label": "Amount ($/£/€)",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "vatRate",
        "label": "VAT Rate (%)",
        "type": "number",
        "defaultValue": 20,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 0.5
      }
    ],
    "formula": "Add VAT: Gross = Net × (1 + r)  |  Remove VAT: Net = Gross / (1 + r)",
    "keywords": [
      "vat calculator",
      "value added tax",
      "add vat",
      "remove vat",
      "sales tax"
    ]
  },
  {
    "id": "sales-tax-calculator",
    "title": "Sales Tax Calculator",
    "slug": "sales-tax-calculator",
    "category": "finance",
    "shortDesc": "Compute total purchase price including state and local sales tax.",
    "badge": "",
    "fields": [
      {
        "id": "price",
        "label": "Purchase Price ($)",
        "type": "number",
        "defaultValue": 250,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "taxRate",
        "label": "Sales Tax Rate (%)",
        "type": "number",
        "defaultValue": 8.25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 0.05
      }
    ],
    "formula": "Total = Price + (Price × Sales Tax Rate)",
    "keywords": [
      "sales tax calculator",
      "state tax",
      "checkout tax",
      "retail tax"
    ]
  },
  {
    "id": "commission-calculator",
    "title": "Commission Calculator",
    "slug": "commission-calculator",
    "category": "finance",
    "shortDesc": "Calculate sales commission earnings and total compensation.",
    "badge": "",
    "fields": [
      {
        "id": "salesAmount",
        "label": "Total Sales Revenue ($)",
        "type": "number",
        "defaultValue": 80000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      },
      {
        "id": "commissionRate",
        "label": "Commission Rate (%)",
        "type": "number",
        "defaultValue": 7.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 0.5
      },
      {
        "id": "baseSalary",
        "label": "Base Salary ($) (optional)",
        "type": "number",
        "defaultValue": 3000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      }
    ],
    "formula": "Total Earnings = Base Pay + (Sales × Commission Rate)",
    "keywords": [
      "commission calculator",
      "sales commission",
      "broker fee",
      "real estate commission"
    ]
  },
  {
    "id": "salary-calculator",
    "title": "Salary Converter Calculator",
    "slug": "salary-calculator",
    "category": "finance",
    "shortDesc": "Convert annual salary into monthly, bi-weekly, weekly, and hourly pay.",
    "badge": "popular",
    "fields": [
      {
        "id": "annualSalary",
        "label": "Annual Salary ($)",
        "type": "number",
        "defaultValue": 65000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1000,
        "step": 1000
      },
      {
        "id": "hoursPerWeek",
        "label": "Hours Worked per Week",
        "type": "number",
        "defaultValue": 40,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 100,
        "step": 1
      },
      {
        "id": "weeksPerYear",
        "label": "Working Weeks per Year",
        "type": "number",
        "defaultValue": 52,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 52,
        "step": 1
      }
    ],
    "formula": "Hourly = Annual / (Weeks × Hours/Week)",
    "keywords": [
      "salary calculator",
      "hourly to salary",
      "biweekly pay",
      "wage converter"
    ]
  },
  {
    "id": "hourly-wage-calculator",
    "title": "Hourly Wage Calculator",
    "slug": "hourly-wage-calculator",
    "category": "finance",
    "shortDesc": "Convert hourly rate and overtime into total weekly, monthly, and annual gross pay.",
    "badge": "",
    "fields": [
      {
        "id": "hourlyRate",
        "label": "Hourly Rate ($)",
        "type": "number",
        "defaultValue": 28,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "regularHours",
        "label": "Regular Hours / Week",
        "type": "number",
        "defaultValue": 40,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 60,
        "step": 1
      },
      {
        "id": "overtimeHours",
        "label": "Overtime Hours / Week",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 40,
        "step": 1
      },
      {
        "id": "overtimeMultiplier",
        "label": "Overtime Rate Multiplier",
        "type": "number",
        "defaultValue": 1.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 3,
        "step": 0.25
      }
    ],
    "formula": "Weekly = (Rate × Reg Hours) + (Rate × Overtime Multiplier × OT Hours)",
    "keywords": [
      "hourly wage calculator",
      "overtime pay",
      "time and a half",
      "paycheck estimator"
    ]
  },
  {
    "id": "net-worth-calculator",
    "title": "Net Worth Calculator",
    "slug": "net-worth-calculator",
    "category": "finance",
    "shortDesc": "Calculate total net worth by summing assets and subtracting liabilities.",
    "badge": "",
    "fields": [
      {
        "id": "cash",
        "label": "Cash & Bank Accounts ($)",
        "type": "number",
        "defaultValue": 15000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      },
      {
        "id": "investments",
        "label": "Investments & Retirement ($)",
        "type": "number",
        "defaultValue": 65000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 5000
      },
      {
        "id": "realEstate",
        "label": "Real Estate & Vehicles Value ($)",
        "type": "number",
        "defaultValue": 350000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 10000
      },
      {
        "id": "mortgage",
        "label": "Mortgage Debt ($)",
        "type": "number",
        "defaultValue": 240000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 5000
      },
      {
        "id": "otherDebt",
        "label": "Auto, Student & Credit Card Debt ($)",
        "type": "number",
        "defaultValue": 22000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      }
    ],
    "formula": "Net Worth = Total Assets - Total Liabilities",
    "keywords": [
      "net worth calculator",
      "assets minus liabilities",
      "wealth snapshot",
      "financial health"
    ]
  },
  {
    "id": "break-even-calculator",
    "title": "Break-Even Calculator",
    "slug": "break-even-calculator",
    "category": "finance",
    "shortDesc": "Find the sales volume and revenue needed to cover total business costs.",
    "badge": "",
    "fields": [
      {
        "id": "fixedCosts",
        "label": "Fixed Costs ($)",
        "type": "number",
        "defaultValue": 12000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      },
      {
        "id": "variableCostPerUnit",
        "label": "Variable Cost per Unit ($)",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      },
      {
        "id": "salePricePerUnit",
        "label": "Sales Price per Unit ($)",
        "type": "number",
        "defaultValue": 40,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      }
    ],
    "formula": "Break-Even Units = Fixed Costs / (Price - Variable Cost per Unit)",
    "keywords": [
      "break even calculator",
      "break even point",
      "contribution margin",
      "business planning"
    ]
  },
  {
    "id": "debt-payoff-calculator",
    "title": "Debt Payoff Calculator",
    "slug": "debt-payoff-calculator",
    "category": "finance",
    "shortDesc": "Determine months to become debt-free and total interest paid.",
    "badge": "",
    "fields": [
      {
        "id": "balance",
        "label": "Total Debt Balance ($)",
        "type": "number",
        "defaultValue": 18000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 100,
        "step": 500
      },
      {
        "id": "interestRate",
        "label": "Annual Interest Rate (%)",
        "type": "number",
        "defaultValue": 19.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "monthlyPayment",
        "label": "Monthly Payment ($)",
        "type": "number",
        "defaultValue": 550,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 10,
        "step": 50
      }
    ],
    "formula": "n = -ln(1 - (B × r) / PMT) / ln(1 + r)",
    "keywords": [
      "debt payoff calculator",
      "credit card debt",
      "debt free",
      "amortization period"
    ]
  },
  {
    "id": "currency-calculator",
    "title": "Currency Converter",
    "slug": "currency-calculator",
    "category": "finance",
    "shortDesc": "Real-time benchmark exchange rate conversion between major world currencies.",
    "badge": "popular",
    "fields": [
      {
        "id": "amount",
        "label": "Amount",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "from",
        "label": "From Currency",
        "type": "select",
        "defaultValue": "USD",
        "placeholder": "",
        "options": [
          {
            "label": "USD - US Dollar",
            "value": "USD"
          },
          {
            "label": "EUR - Euro",
            "value": "EUR"
          },
          {
            "label": "GBP - British Pound",
            "value": "GBP"
          },
          {
            "label": "JPY - Japanese Yen",
            "value": "JPY"
          },
          {
            "label": "CAD - Canadian Dollar",
            "value": "CAD"
          },
          {
            "label": "AUD - Australian Dollar",
            "value": "AUD"
          },
          {
            "label": "INR - Indian Rupee",
            "value": "INR"
          },
          {
            "label": "CHF - Swiss Franc",
            "value": "CHF"
          }
        ],
        "unit": ""
      },
      {
        "id": "to",
        "label": "To Currency",
        "type": "select",
        "defaultValue": "EUR",
        "placeholder": "",
        "options": [
          {
            "label": "EUR - Euro",
            "value": "EUR"
          },
          {
            "label": "USD - US Dollar",
            "value": "USD"
          },
          {
            "label": "GBP - British Pound",
            "value": "GBP"
          },
          {
            "label": "JPY - Japanese Yen",
            "value": "JPY"
          },
          {
            "label": "CAD - Canadian Dollar",
            "value": "CAD"
          },
          {
            "label": "AUD - Australian Dollar",
            "value": "AUD"
          },
          {
            "label": "INR - Indian Rupee",
            "value": "INR"
          },
          {
            "label": "CHF - Swiss Franc",
            "value": "CHF"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Target = Amount × (Rate_from / Rate_to)",
    "keywords": [
      "currency calculator",
      "exchange rate",
      "usd to eur",
      "forex converter"
    ]
  },
  {
    "id": "bmi-calculator",
    "title": "BMI Calculator (Body Mass Index)",
    "slug": "bmi-calculator",
    "category": "health-fitness",
    "shortDesc": "Calculate Body Mass Index (BMI) and determine your WHO weight category.",
    "badge": "popular",
    "fields": [
      {
        "id": "unit",
        "label": "Measurement Unit",
        "type": "select",
        "defaultValue": "metric",
        "placeholder": "",
        "options": [
          {
            "label": "Metric (kg, cm)",
            "value": "metric"
          },
          {
            "label": "US Customary (lbs, inches)",
            "value": "imperial"
          }
        ],
        "unit": ""
      },
      {
        "id": "weight",
        "label": "Weight (kg or lbs)",
        "type": "number",
        "defaultValue": 70,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 20,
        "max": 400,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height (cm or inches)",
        "type": "number",
        "defaultValue": 175,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 50,
        "max": 250,
        "step": 0.5
      }
    ],
    "formula": "Metric: BMI = weight (kg) / [height (m)]²  |  Imperial: BMI = 703 × weight (lbs) / [height (in)]²",
    "keywords": [
      "bmi calculator",
      "body mass index",
      "weight category",
      "healthy weight range"
    ]
  },
  {
    "id": "bmr-calculator",
    "title": "BMR Calculator (Basal Metabolic Rate)",
    "slug": "bmr-calculator",
    "category": "health-fitness",
    "shortDesc": "Compute the baseline calories burned at rest using the Mifflin-St Jeor equation.",
    "badge": "popular",
    "fields": [
      {
        "id": "gender",
        "label": "Gender",
        "type": "select",
        "defaultValue": "male",
        "placeholder": "",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "unit": ""
      },
      {
        "id": "age",
        "label": "Age (Years)",
        "type": "number",
        "defaultValue": 28,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 15,
        "max": 100,
        "step": 1
      },
      {
        "id": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": 75,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "max": 300,
        "step": 0.5
      },
      {
        "id": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": 178,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 100,
        "max": 230,
        "step": 1
      }
    ],
    "formula": "Men: BMR = 10W + 6.25H - 5A + 5  |  Women: BMR = 10W + 6.25H - 5A - 161",
    "keywords": [
      "bmr calculator",
      "basal metabolic rate",
      "mifflin st jeor",
      "resting calories"
    ]
  },
  {
    "id": "tdee-calculator",
    "title": "TDEE Calculator (Total Daily Energy Expenditure)",
    "slug": "tdee-calculator",
    "category": "health-fitness",
    "shortDesc": "Calculate total daily calorie expenditure based on physical activity multiplier.",
    "badge": "popular",
    "fields": [
      {
        "id": "gender",
        "label": "Gender",
        "type": "select",
        "defaultValue": "male",
        "placeholder": "",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "unit": ""
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 15,
        "max": 100,
        "step": 1
      },
      {
        "id": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": 78,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "step": 0.5
      },
      {
        "id": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": 180,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 100,
        "step": 1
      },
      {
        "id": "activity",
        "label": "Activity Level",
        "type": "select",
        "defaultValue": "moderate",
        "placeholder": "",
        "options": [
          {
            "label": "Sedentary (desk job, little exercise) [× 1.2]",
            "value": "sedentary"
          },
          {
            "label": "Lightly Active (exercise 1-3 days/week) [× 1.375]",
            "value": "light"
          },
          {
            "label": "Moderately Active (exercise 3-5 days/week) [× 1.55]",
            "value": "moderate"
          },
          {
            "label": "Very Active (hard exercise 6-7 days/week) [× 1.725]",
            "value": "very"
          },
          {
            "label": "Extremely Active (athlete, physical job) [× 1.9]",
            "value": "extra"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "TDEE = BMR × Activity Multiplier",
    "keywords": [
      "tdee calculator",
      "daily calorie burn",
      "maintenance calories",
      "macro planning"
    ]
  },
  {
    "id": "calorie-calculator",
    "title": "Calorie Deficit / Surplus Calculator",
    "slug": "calorie-calculator",
    "category": "health-fitness",
    "shortDesc": "Determine target calorie intake for weight loss, maintenance, or muscle gain.",
    "badge": "popular",
    "fields": [
      {
        "id": "tdee",
        "label": "Your Maintenance Calories (TDEE)",
        "type": "number",
        "defaultValue": 2400,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1000,
        "step": 50
      },
      {
        "id": "goal",
        "label": "Fitness Goal",
        "type": "select",
        "defaultValue": "moderate_loss",
        "placeholder": "",
        "options": [
          {
            "label": "Maintain Current Weight",
            "value": "maintain"
          },
          {
            "label": "Mild Weight Loss (-0.5 lb / week)",
            "value": "mild_loss"
          },
          {
            "label": "Moderate Weight Loss (-1 lb / week)",
            "value": "moderate_loss"
          },
          {
            "label": "Aggressive Weight Loss (-1.5 lb / week)",
            "value": "fast_loss"
          },
          {
            "label": "Lean Muscle Bulk (+0.5 lb / week)",
            "value": "lean_bulk"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Target = TDEE ± Goal Deficit/Surplus",
    "keywords": [
      "calorie calculator",
      "calorie deficit",
      "weight loss calories",
      "bulking calories"
    ]
  },
  {
    "id": "ideal-weight-calculator",
    "title": "Ideal Weight Calculator",
    "slug": "ideal-weight-calculator",
    "category": "health-fitness",
    "shortDesc": "Compute ideal body weight using Devine, Robinson, Miller, and Hamwi equations.",
    "badge": "",
    "fields": [
      {
        "id": "gender",
        "label": "Gender",
        "type": "select",
        "defaultValue": "male",
        "placeholder": "",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "unit": ""
      },
      {
        "id": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": 175,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 140,
        "max": 220,
        "step": 1
      }
    ],
    "formula": "Devine: Men: 50kg + 2.3kg/in > 5ft  |  Women: 45.5kg + 2.3kg/in > 5ft",
    "keywords": [
      "ideal weight calculator",
      "devine formula",
      "healthy weight",
      "ibw calculator"
    ]
  },
  {
    "id": "body-fat-calculator",
    "title": "Body Fat Calculator (US Navy Method)",
    "slug": "body-fat-calculator",
    "category": "health-fitness",
    "shortDesc": "Estimate body fat percentage and fat mass using US Navy anthropometric equations.",
    "badge": "",
    "fields": [
      {
        "id": "gender",
        "label": "Gender",
        "type": "select",
        "defaultValue": "male",
        "placeholder": "",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "unit": ""
      },
      {
        "id": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": 78,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "step": 0.5
      },
      {
        "id": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": 178,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 100,
        "step": 0.5
      },
      {
        "id": "neckCm",
        "label": "Neck Circumference (cm)",
        "type": "number",
        "defaultValue": 38,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 20,
        "step": 0.5
      },
      {
        "id": "waistCm",
        "label": "Waist Circumference (cm)",
        "type": "number",
        "defaultValue": 84,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 40,
        "step": 0.5
      },
      {
        "id": "hipCm",
        "label": "Hip Circumference (cm) (Female only)",
        "type": "number",
        "defaultValue": 95,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 50,
        "step": 0.5
      }
    ],
    "formula": "Men: 495 / (1.0324 - 0.19077 log10(waist-neck) + 0.15456 log10(height)) - 450",
    "keywords": [
      "body fat calculator",
      "us navy method",
      "fat percentage",
      "lean mass",
      "body composition"
    ]
  },
  {
    "id": "lean-body-mass-calculator",
    "title": "Lean Body Mass Calculator",
    "slug": "lean-body-mass-calculator",
    "category": "health-fitness",
    "shortDesc": "Compute total lean tissue (muscle, bones, organs) using Boer and James formulas.",
    "badge": "",
    "fields": [
      {
        "id": "gender",
        "label": "Gender",
        "type": "select",
        "defaultValue": "male",
        "placeholder": "",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "unit": ""
      },
      {
        "id": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": 80,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "step": 0.5
      },
      {
        "id": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": 180,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 100,
        "step": 1
      }
    ],
    "formula": "Boer: Men LBM = 0.407W + 0.267H - 19.2  |  Women LBM = 0.252W + 0.473H - 48.3",
    "keywords": [
      "lean body mass",
      "lbm calculator",
      "muscle mass",
      "boer formula"
    ]
  },
  {
    "id": "macro-calculator",
    "title": "Macro Calculator (Protein, Carbs, Fats)",
    "slug": "macro-calculator",
    "category": "health-fitness",
    "shortDesc": "Calculate grams of daily protein, carbohydrates, and fats for your diet style.",
    "badge": "popular",
    "fields": [
      {
        "id": "calories",
        "label": "Daily Calorie Target (kcal)",
        "type": "number",
        "defaultValue": 2200,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1000,
        "step": 50
      },
      {
        "id": "dietType",
        "label": "Diet Distribution",
        "type": "select",
        "defaultValue": "balanced",
        "placeholder": "",
        "options": [
          {
            "label": "Balanced (30% Protein / 40% Carbs / 30% Fat)",
            "value": "balanced"
          },
          {
            "label": "High Protein / Bodybuilding (40% P / 35% C / 25% F)",
            "value": "high_protein"
          },
          {
            "label": "Low Carb (35% P / 20% C / 45% F)",
            "value": "low_carb"
          },
          {
            "label": "Ketogenic (20% P / 5% C / 75% F)",
            "value": "keto"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Protein (g) = (kcal × %P)/4  |  Carbs (g) = (kcal × %C)/4  |  Fats (g) = (kcal × %F)/9",
    "keywords": [
      "macro calculator",
      "protein carbs fat",
      "keto macros",
      "flexible dieting",
      "iifym"
    ]
  },
  {
    "id": "protein-calculator",
    "title": "Protein Intake Calculator",
    "slug": "protein-calculator",
    "category": "health-fitness",
    "shortDesc": "Compute daily grams of dietary protein needed for muscle hypertrophy or health.",
    "badge": "",
    "fields": [
      {
        "id": "weightKg",
        "label": "Body Weight (kg)",
        "type": "number",
        "defaultValue": 75,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "step": 0.5
      },
      {
        "id": "goal",
        "label": "Goal & Activity Level",
        "type": "select",
        "defaultValue": "muscle_building",
        "placeholder": "",
        "options": [
          {
            "label": "Sedentary Adult (RDA minimum) [0.8 g/kg]",
            "value": "sedentary"
          },
          {
            "label": "Endurance Athlete (Running/Cycling) [1.3 g/kg]",
            "value": "endurance"
          },
          {
            "label": "Strength Training / Hypertrophy [1.8 g/kg]",
            "value": "muscle_building"
          },
          {
            "label": "Fat Loss While Preserving Muscle [2.2 g/kg]",
            "value": "cutting"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Daily Protein (g) = Body Weight (kg) × Recommended Multiplier (g/kg)",
    "keywords": [
      "protein calculator",
      "muscle protein synthesis",
      "daily protein intake",
      "gym nutrition"
    ]
  },
  {
    "id": "water-intake-calculator",
    "title": "Daily Water Intake Calculator",
    "slug": "water-intake-calculator",
    "category": "health-fitness",
    "shortDesc": "Determine optimal daily hydration in liters and glasses based on weight and activity.",
    "badge": "",
    "fields": [
      {
        "id": "weightKg",
        "label": "Body Weight (kg)",
        "type": "number",
        "defaultValue": 70,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "step": 1
      },
      {
        "id": "exerciseMinutes",
        "label": "Daily Exercise / Workout (Minutes)",
        "type": "number",
        "defaultValue": 45,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 240,
        "step": 15
      },
      {
        "id": "climate",
        "label": "Climate / Environment",
        "type": "select",
        "defaultValue": "moderate",
        "placeholder": "",
        "options": [
          {
            "label": "Normal / Temperate Climate",
            "value": "moderate"
          },
          {
            "label": "Hot / Humid Climate",
            "value": "hot"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Water (ml) = (Weight kg × 35) + (Workout min × 12) + Climate",
    "keywords": [
      "water intake calculator",
      "daily hydration",
      "how much water to drink",
      "fluid intake"
    ]
  },
  {
    "id": "heart-rate-calculator",
    "title": "Target Heart Rate Calculator",
    "slug": "heart-rate-calculator",
    "category": "health-fitness",
    "shortDesc": "Calculate Max Heart Rate and training intensity zones (Zones 1 through 5).",
    "badge": "",
    "fields": [
      {
        "id": "age",
        "label": "Age (Years)",
        "type": "number",
        "defaultValue": 32,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 12,
        "max": 100,
        "step": 1
      },
      {
        "id": "restingHR",
        "label": "Resting Heart Rate (bpm) (optional)",
        "type": "number",
        "defaultValue": 65,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 40,
        "max": 120,
        "step": 1
      }
    ],
    "formula": "Max HR = 208 - (0.7 × Age)  |  Target Zone = Resting HR + (HRR × Intensity %)",
    "keywords": [
      "target heart rate",
      "max heart rate",
      "zone 2 cardio",
      "karvonen formula",
      "bpm"
    ]
  },
  {
    "id": "pace-calculator",
    "title": "Running Pace Calculator",
    "slug": "pace-calculator",
    "category": "health-fitness",
    "shortDesc": "Compute running pace per kilometer or mile from total distance and finish time.",
    "badge": "",
    "fields": [
      {
        "id": "distanceKm",
        "label": "Distance (km)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.1
      },
      {
        "id": "hours",
        "label": "Hours",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      },
      {
        "id": "minutes",
        "label": "Minutes",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 59,
        "step": 1
      },
      {
        "id": "seconds",
        "label": "Seconds",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 59,
        "step": 1
      }
    ],
    "formula": "Pace = Time / Distance  |  Speed = Distance / Time",
    "keywords": [
      "pace calculator",
      "running pace",
      "marathon split",
      "5k time",
      "10k pace"
    ]
  },
  {
    "id": "pregnancy-calculator",
    "title": "Pregnancy Calculator & Due Date",
    "slug": "pregnancy-calculator",
    "category": "health-fitness",
    "shortDesc": "Estimate due date, current gestational week, and trimester based on Naegele rule.",
    "badge": "popular",
    "fields": [
      {
        "id": "lmpDate",
        "label": "First Day of Last Menstrual Period (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-03-01",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Estimated Due Date = First day of LMP + 1 year - 3 months + 7 days (Naegele's rule)",
    "keywords": [
      "pregnancy calculator",
      "due date calculator",
      "gestational age",
      "trimester calculator"
    ]
  },
  {
    "id": "due-date-calculator",
    "title": "Due Date Calculator",
    "slug": "due-date-calculator",
    "category": "health-fitness",
    "shortDesc": "Calculate conception date, milestones, and delivery timeline.",
    "badge": "",
    "fields": [
      {
        "id": "lmp",
        "label": "First Day of Last Period (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-01-15",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Due Date = LMP + 280 days",
    "keywords": [
      "due date calculator",
      "edd",
      "pregnancy milestones"
    ]
  },
  {
    "id": "age-calculator",
    "title": "Age Calculator",
    "slug": "age-calculator",
    "category": "health-fitness",
    "shortDesc": "Compute exact chronological age in years, months, days, hours, and next birthday countdown.",
    "badge": "popular",
    "fields": [
      {
        "id": "birthDate",
        "label": "Date of Birth (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "1995-08-24",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Age = Current Date - Date of Birth (accounting for leap years and month lengths)",
    "keywords": [
      "age calculator",
      "how old am i",
      "birthday countdown",
      "chronological age"
    ]
  },
  {
    "id": "running-pace-calculator",
    "title": "Marathon & Race Time Predictor",
    "slug": "running-pace-calculator",
    "category": "health-fitness",
    "shortDesc": "Predict 5K, 10K, Half-Marathon, and Marathon finish times using Riegel formula.",
    "badge": "",
    "fields": [
      {
        "id": "recentDistKm",
        "label": "Recent Race Distance (km)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.1
      },
      {
        "id": "recentTimeMin",
        "label": "Recent Finish Time (Minutes)",
        "type": "number",
        "defaultValue": 24,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "step": 0.5
      }
    ],
    "formula": "T₂ = T₁ × (D₂ / D₁)^1.06 (Pete Riegel endurance formula)",
    "keywords": [
      "race predictor",
      "marathon predictor",
      "riegel formula",
      "running calculator"
    ]
  },
  {
    "id": "date-difference-calculator",
    "title": "Date Difference Calculator",
    "slug": "date-difference-calculator",
    "category": "date-time",
    "shortDesc": "Calculate exact calendar days, weeks, months, and years between two dates.",
    "badge": "popular",
    "fields": [
      {
        "id": "startDate",
        "label": "Start Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-01-01",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      },
      {
        "id": "endDate",
        "label": "End Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-12-31",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Days = |Date₂ - Date₁| / (1000 × 60 × 60 × 24)",
    "keywords": [
      "date difference",
      "days between dates",
      "calendar days",
      "date duration"
    ]
  },
  {
    "id": "days-between-dates",
    "title": "Days Between Dates Calculator",
    "slug": "days-between-dates",
    "category": "date-time",
    "shortDesc": "Count total calendar days, weekdays, and weekend days between any two dates.",
    "badge": "",
    "fields": [
      {
        "id": "start",
        "label": "From Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-09-01",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      },
      {
        "id": "end",
        "label": "To Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-09-30",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Total = Business Days + Weekend Days (inclusive counting)",
    "keywords": [
      "days between dates",
      "working days",
      "weekdays count",
      "calendar days"
    ]
  },
  {
    "id": "time-duration-calculator",
    "title": "Time Duration Calculator",
    "slug": "time-duration-calculator",
    "category": "date-time",
    "shortDesc": "Compute difference between start time and end time in hours, minutes, and seconds.",
    "badge": "",
    "fields": [
      {
        "id": "startTime",
        "label": "Start Time (HH:MM:SS)",
        "type": "text",
        "defaultValue": "09:15:00",
        "placeholder": "09:15:00",
        "options": [],
        "unit": ""
      },
      {
        "id": "endTime",
        "label": "End Time (HH:MM:SS)",
        "type": "text",
        "defaultValue": "17:45:30",
        "placeholder": "17:45:30",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Duration = End Time (seconds) - Start Time (seconds)",
    "keywords": [
      "time duration calculator",
      "hours between times",
      "timesheet hours",
      "elapsed time"
    ]
  },
  {
    "id": "date-add-calculator",
    "title": "Date Add Calculator",
    "slug": "date-add-calculator",
    "category": "date-time",
    "shortDesc": "Add days, weeks, months, or years to a starting date to find the future date.",
    "badge": "",
    "fields": [
      {
        "id": "date",
        "label": "Starting Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-06-15",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      },
      {
        "id": "days",
        "label": "Days to Add",
        "type": "number",
        "defaultValue": 45,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "months",
        "label": "Months to Add",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "years",
        "label": "Years to Add",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      }
    ],
    "formula": "Result Date = Start Date + Years + Months + Days",
    "keywords": [
      "date add calculator",
      "add days to date",
      "future date calculator",
      "calendar math"
    ]
  },
  {
    "id": "date-subtract-calculator",
    "title": "Date Subtract Calculator",
    "slug": "date-subtract-calculator",
    "category": "date-time",
    "shortDesc": "Subtract days, weeks, or months from a date to find past dates.",
    "badge": "",
    "fields": [
      {
        "id": "date",
        "label": "Starting Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-10-15",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      },
      {
        "id": "days",
        "label": "Days to Subtract",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      }
    ],
    "formula": "Result Date = Start Date - Days",
    "keywords": [
      "date subtract calculator",
      "subtract days",
      "past date calculator"
    ]
  },
  {
    "id": "business-days-calculator",
    "title": "Business Days Calculator",
    "slug": "business-days-calculator",
    "category": "date-time",
    "shortDesc": "Calculate working days between two dates, excluding weekends.",
    "badge": "",
    "fields": [
      {
        "id": "start",
        "label": "Start Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-10-01",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      },
      {
        "id": "end",
        "label": "End Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2026-10-31",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Business Days = Total Days - Saturdays - Sundays",
    "keywords": [
      "business days calculator",
      "working days",
      "sla calculator",
      "work days"
    ]
  },
  {
    "id": "countdown-calculator",
    "title": "Countdown Calculator",
    "slug": "countdown-calculator",
    "category": "date-time",
    "shortDesc": "Calculate remaining days, hours, minutes, and seconds until any event or date.",
    "badge": "popular",
    "fields": [
      {
        "id": "targetDate",
        "label": "Target Date (YYYY-MM-DD)",
        "type": "text",
        "defaultValue": "2027-01-01",
        "placeholder": "YYYY-MM-DD",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Time Remaining = Target Date - Current Timestamp",
    "keywords": [
      "countdown calculator",
      "days until",
      "event timer",
      "how many days until"
    ]
  },
  {
    "id": "time-zone-converter",
    "title": "Time Zone Converter",
    "slug": "time-zone-converter",
    "category": "date-time",
    "shortDesc": "Convert local time across UTC, EST, PST, GMT, CET, IST, JST, and AEST.",
    "badge": "",
    "fields": [
      {
        "id": "time",
        "label": "Time (HH:MM)",
        "type": "text",
        "defaultValue": "15:00",
        "placeholder": "15:00",
        "options": [],
        "unit": ""
      },
      {
        "id": "fromZone",
        "label": "From Timezone",
        "type": "select",
        "defaultValue": "UTC",
        "placeholder": "",
        "options": [
          {
            "label": "UTC / GMT (UTC+0)",
            "value": "0"
          },
          {
            "label": "EST - New York (UTC-5)",
            "value": "-5"
          },
          {
            "label": "CST - Chicago (UTC-6)",
            "value": "-6"
          },
          {
            "label": "PST - Los Angeles (UTC-8)",
            "value": "-8"
          },
          {
            "label": "CET - Paris/Berlin (UTC+1)",
            "value": "1"
          },
          {
            "label": "IST - India (UTC+5.5)",
            "value": "5.5"
          },
          {
            "label": "JST - Tokyo (UTC+9)",
            "value": "9"
          },
          {
            "label": "AEST - Sydney (UTC+10)",
            "value": "10"
          }
        ],
        "unit": ""
      },
      {
        "id": "toZone",
        "label": "To Timezone",
        "type": "select",
        "defaultValue": "5.5",
        "placeholder": "",
        "options": [
          {
            "label": "UTC / GMT (UTC+0)",
            "value": "0"
          },
          {
            "label": "EST - New York (UTC-5)",
            "value": "-5"
          },
          {
            "label": "CST - Chicago (UTC-6)",
            "value": "-6"
          },
          {
            "label": "PST - Los Angeles (UTC-8)",
            "value": "-8"
          },
          {
            "label": "CET - Paris/Berlin (UTC+1)",
            "value": "1"
          },
          {
            "label": "IST - India (UTC+5.5)",
            "value": "5.5"
          },
          {
            "label": "JST - Tokyo (UTC+9)",
            "value": "9"
          },
          {
            "label": "AEST - Sydney (UTC+10)",
            "value": "10"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Time_target = Time_source - Offset_from + Offset_to",
    "keywords": [
      "time zone converter",
      "utc to est",
      "pst to gmt",
      "international meeting planner"
    ]
  },
  {
    "id": "unix-timestamp-converter",
    "title": "Unix Timestamp Converter",
    "slug": "unix-timestamp-converter",
    "category": "date-time",
    "shortDesc": "Convert Unix epoch timestamps to human-readable date & time and vice versa.",
    "badge": "",
    "fields": [
      {
        "id": "timestamp",
        "label": "Unix Timestamp (seconds)",
        "type": "number",
        "defaultValue": 1773489000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      }
    ],
    "formula": "Date = Unix Epoch (seconds since Jan 01, 1970 00:00:00 UTC)",
    "keywords": [
      "unix timestamp",
      "epoch converter",
      "timestamp to date",
      "epoch time"
    ]
  },
  {
    "id": "hours-calculator",
    "title": "Hours Calculator",
    "slug": "hours-calculator",
    "category": "date-time",
    "shortDesc": "Sum daily shifts and decimal hours for timesheet payroll processing.",
    "badge": "",
    "fields": [
      {
        "id": "h1",
        "label": "Day 1 Hours",
        "type": "number",
        "defaultValue": 8.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 24,
        "step": 0.25
      },
      {
        "id": "h2",
        "label": "Day 2 Hours",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 24,
        "step": 0.25
      },
      {
        "id": "h3",
        "label": "Day 3 Hours",
        "type": "number",
        "defaultValue": 7.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 24,
        "step": 0.25
      },
      {
        "id": "h4",
        "label": "Day 4 Hours",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 24,
        "step": 0.25
      },
      {
        "id": "h5",
        "label": "Day 5 Hours",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 24,
        "step": 0.25
      }
    ],
    "formula": "Total Hours = Sum(Shift Hours)",
    "keywords": [
      "hours calculator",
      "timesheet hours",
      "work hours total",
      "payroll hours"
    ]
  },
  {
    "id": "minutes-calculator",
    "title": "Minutes Calculator",
    "slug": "minutes-calculator",
    "category": "date-time",
    "shortDesc": "Convert minutes to hours, days, seconds, and fractional formats.",
    "badge": "",
    "fields": [
      {
        "id": "minutes",
        "label": "Minutes",
        "type": "number",
        "defaultValue": 450,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      }
    ],
    "formula": "Hours = Minutes / 60  |  Seconds = Minutes × 60",
    "keywords": [
      "minutes calculator",
      "minutes to hours",
      "time conversion"
    ]
  },
  {
    "id": "seconds-calculator",
    "title": "Seconds Calculator",
    "slug": "seconds-calculator",
    "category": "date-time",
    "shortDesc": "Convert seconds into HH:MM:SS format, minutes, and days.",
    "badge": "",
    "fields": [
      {
        "id": "seconds",
        "label": "Seconds",
        "type": "number",
        "defaultValue": 86400,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      }
    ],
    "formula": "Time = floor(s/3600) : floor((s%3600)/60) : s%60",
    "keywords": [
      "seconds calculator",
      "seconds to hours",
      "hhmmss converter"
    ]
  },
  {
    "id": "length-converter",
    "title": "Length & Distance Converter",
    "slug": "length-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between meters, kilometers, feet, inches, yards, miles, and centimeters.",
    "badge": "popular",
    "fields": [
      {
        "id": "value",
        "label": "Value to Convert",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "m",
        "placeholder": "",
        "options": [
          {
            "label": "Meters (m)",
            "value": "m"
          },
          {
            "label": "Kilometers (km)",
            "value": "km"
          },
          {
            "label": "Centimeters (cm)",
            "value": "cm"
          },
          {
            "label": "Millimeters (mm)",
            "value": "mm"
          },
          {
            "label": "Inches (in)",
            "value": "in"
          },
          {
            "label": "Feet (ft)",
            "value": "ft"
          },
          {
            "label": "Yards (yd)",
            "value": "yd"
          },
          {
            "label": "Miles (mi)",
            "value": "mi"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "ft",
        "placeholder": "",
        "options": [
          {
            "label": "Feet (ft)",
            "value": "ft"
          },
          {
            "label": "Meters (m)",
            "value": "m"
          },
          {
            "label": "Kilometers (km)",
            "value": "km"
          },
          {
            "label": "Centimeters (cm)",
            "value": "cm"
          },
          {
            "label": "Inches (in)",
            "value": "in"
          },
          {
            "label": "Yards (yd)",
            "value": "yd"
          },
          {
            "label": "Miles (mi)",
            "value": "mi"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Value_to = Value_from × (Factor_from / Factor_to)",
    "keywords": [
      "length converter",
      "meters to feet",
      "inches to cm",
      "distance conversion",
      "miles to km"
    ]
  },
  {
    "id": "weight-converter",
    "title": "Weight & Mass Converter",
    "slug": "weight-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between kilograms, pounds (lbs), grams, ounces, stones, and metric tons.",
    "badge": "popular",
    "fields": [
      {
        "id": "value",
        "label": "Weight Value",
        "type": "number",
        "defaultValue": 150,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "lb",
        "placeholder": "",
        "options": [
          {
            "label": "Pounds (lbs)",
            "value": "lb"
          },
          {
            "label": "Kilograms (kg)",
            "value": "kg"
          },
          {
            "label": "Grams (g)",
            "value": "g"
          },
          {
            "label": "Ounces (oz)",
            "value": "oz"
          },
          {
            "label": "Stones (st)",
            "value": "st"
          },
          {
            "label": "Metric Tons (t)",
            "value": "t"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "kg",
        "placeholder": "",
        "options": [
          {
            "label": "Kilograms (kg)",
            "value": "kg"
          },
          {
            "label": "Pounds (lbs)",
            "value": "lb"
          },
          {
            "label": "Grams (g)",
            "value": "g"
          },
          {
            "label": "Ounces (oz)",
            "value": "oz"
          },
          {
            "label": "Stones (st)",
            "value": "st"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "kg = lbs × 0.45359237  |  lbs = kg × 2.20462",
    "keywords": [
      "weight converter",
      "lbs to kg",
      "kg to lbs",
      "grams to ounces",
      "stone to kg"
    ]
  },
  {
    "id": "temperature-converter",
    "title": "Temperature Converter",
    "slug": "temperature-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (°R).",
    "badge": "popular",
    "fields": [
      {
        "id": "temp",
        "label": "Temperature Value",
        "type": "number",
        "defaultValue": 25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "c",
        "placeholder": "",
        "options": [
          {
            "label": "Celsius (°C)",
            "value": "c"
          },
          {
            "label": "Fahrenheit (°F)",
            "value": "f"
          },
          {
            "label": "Kelvin (K)",
            "value": "k"
          },
          {
            "label": "Rankine (°R)",
            "value": "r"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "f",
        "placeholder": "",
        "options": [
          {
            "label": "Fahrenheit (°F)",
            "value": "f"
          },
          {
            "label": "Celsius (°C)",
            "value": "c"
          },
          {
            "label": "Kelvin (K)",
            "value": "k"
          },
          {
            "label": "Rankine (°R)",
            "value": "r"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "°F = (°C × 9/5) + 32  |  °C = (°F - 32) × 5/9  |  K = °C + 273.15",
    "keywords": [
      "temperature converter",
      "celsius to fahrenheit",
      "f to c",
      "kelvin converter"
    ]
  },
  {
    "id": "area-converter",
    "title": "Area Unit Converter",
    "slug": "area-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between square meters, square feet, acres, hectares, and square kilometers.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Area Value",
        "type": "number",
        "defaultValue": 1,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "acre",
        "placeholder": "",
        "options": [
          {
            "label": "Acres (ac)",
            "value": "acre"
          },
          {
            "label": "Hectares (ha)",
            "value": "ha"
          },
          {
            "label": "Square Feet (sq ft)",
            "value": "sqft"
          },
          {
            "label": "Square Meters (sq m)",
            "value": "sqm"
          },
          {
            "label": "Square Kilometers (sq km)",
            "value": "sqkm"
          },
          {
            "label": "Square Miles (sq mi)",
            "value": "sqmi"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "sqft",
        "placeholder": "",
        "options": [
          {
            "label": "Square Feet (sq ft)",
            "value": "sqft"
          },
          {
            "label": "Square Meters (sq m)",
            "value": "sqm"
          },
          {
            "label": "Acres (ac)",
            "value": "acre"
          },
          {
            "label": "Hectares (ha)",
            "value": "ha"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 Acre = 43,560 sq ft = 4,046.86 m²  |  1 Hectare = 10,000 m²",
    "keywords": [
      "area converter",
      "acres to square feet",
      "hectares to acres",
      "sq ft to sq meters"
    ]
  },
  {
    "id": "volume-converter",
    "title": "Volume & Capacity Converter",
    "slug": "volume-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between liters, gallons (US/UK), milliliters, fluid ounces, and cubic meters.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Volume Value",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "gal",
        "placeholder": "",
        "options": [
          {
            "label": "US Gallons (gal)",
            "value": "gal"
          },
          {
            "label": "Liters (L)",
            "value": "l"
          },
          {
            "label": "Milliliters (ml)",
            "value": "ml"
          },
          {
            "label": "Fluid Ounces (fl oz)",
            "value": "floz"
          },
          {
            "label": "Cubic Meters (m³)",
            "value": "m3"
          },
          {
            "label": "Cubic Feet (ft³)",
            "value": "ft3"
          },
          {
            "label": "Imperial Gallons (UK)",
            "value": "ukgal"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "l",
        "placeholder": "",
        "options": [
          {
            "label": "Liters (L)",
            "value": "l"
          },
          {
            "label": "US Gallons (gal)",
            "value": "gal"
          },
          {
            "label": "Milliliters (ml)",
            "value": "ml"
          },
          {
            "label": "Fluid Ounces (fl oz)",
            "value": "floz"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 US Gallon = 3.7854 Liters = 128 fl oz",
    "keywords": [
      "volume converter",
      "gallons to liters",
      "liters to gallons",
      "fluid ounces to ml"
    ]
  },
  {
    "id": "speed-converter",
    "title": "Speed Converter",
    "slug": "speed-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between mph, km/h, m/s, knots, and feet per second.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Speed Value",
        "type": "number",
        "defaultValue": 65,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "mph",
        "placeholder": "",
        "options": [
          {
            "label": "Miles per Hour (mph)",
            "value": "mph"
          },
          {
            "label": "Kilometers per Hour (km/h)",
            "value": "kmh"
          },
          {
            "label": "Meters per Second (m/s)",
            "value": "ms"
          },
          {
            "label": "Knots (nautical)",
            "value": "knot"
          },
          {
            "label": "Feet per Second (ft/s)",
            "value": "fts"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "kmh",
        "placeholder": "",
        "options": [
          {
            "label": "Kilometers per Hour (km/h)",
            "value": "kmh"
          },
          {
            "label": "Miles per Hour (mph)",
            "value": "mph"
          },
          {
            "label": "Meters per Second (m/s)",
            "value": "ms"
          },
          {
            "label": "Knots (nautical)",
            "value": "knot"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 mph = 1.60934 km/h  |  1 m/s = 3.6 km/h  |  1 knot = 1.852 km/h",
    "keywords": [
      "speed converter",
      "mph to kmh",
      "kmh to mph",
      "knots to mph",
      "meters per second"
    ]
  },
  {
    "id": "data-storage-converter",
    "title": "Data Storage Converter",
    "slug": "data-storage-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Bytes, KB, MB, GB, TB, and PB in both decimal and binary systems.",
    "badge": "popular",
    "fields": [
      {
        "id": "value",
        "label": "Data Size",
        "type": "number",
        "defaultValue": 16,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "gb",
        "placeholder": "",
        "options": [
          {
            "label": "Gigabytes (GB)",
            "value": "gb"
          },
          {
            "label": "Megabytes (MB)",
            "value": "mb"
          },
          {
            "label": "Terabytes (TB)",
            "value": "tb"
          },
          {
            "label": "Kilobytes (KB)",
            "value": "kb"
          },
          {
            "label": "Bytes (B)",
            "value": "b"
          },
          {
            "label": "Petabytes (PB)",
            "value": "pb"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "mb",
        "placeholder": "",
        "options": [
          {
            "label": "Megabytes (MB)",
            "value": "mb"
          },
          {
            "label": "Gigabytes (GB)",
            "value": "gb"
          },
          {
            "label": "Kilobytes (KB)",
            "value": "kb"
          },
          {
            "label": "Terabytes (TB)",
            "value": "tb"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 GB = 1,024 MB = 1,048,576 KB = 1,073,741,824 Bytes",
    "keywords": [
      "data storage converter",
      "gb to mb",
      "tb to gb",
      "bytes converter",
      "gib vs gb"
    ]
  },
  {
    "id": "energy-converter",
    "title": "Energy Converter",
    "slug": "energy-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Joules, Kilojoules, Calories, Kilocalories (kcal), Watt-hours, and BTU.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Energy Value",
        "type": "number",
        "defaultValue": 1000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 10
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "j",
        "placeholder": "",
        "options": [
          {
            "label": "Joules (J)",
            "value": "j"
          },
          {
            "label": "Kilojoules (kJ)",
            "value": "kj"
          },
          {
            "label": "Kilocalories (kcal / food cal)",
            "value": "kcal"
          },
          {
            "label": "Watt-hours (Wh)",
            "value": "wh"
          },
          {
            "label": "Kilowatt-hours (kWh)",
            "value": "kwh"
          },
          {
            "label": "BTU",
            "value": "btu"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "kcal",
        "placeholder": "",
        "options": [
          {
            "label": "Kilocalories (kcal)",
            "value": "kcal"
          },
          {
            "label": "Joules (J)",
            "value": "j"
          },
          {
            "label": "Kilojoules (kJ)",
            "value": "kj"
          },
          {
            "label": "Watt-hours (Wh)",
            "value": "wh"
          },
          {
            "label": "BTU",
            "value": "btu"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 kcal = 4,184 Joules  |  1 kWh = 3.6 × 10⁶ Joules",
    "keywords": [
      "energy converter",
      "joules to calories",
      "kwh to joules",
      "btu converter"
    ]
  },
  {
    "id": "power-converter",
    "title": "Power Converter",
    "slug": "power-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Watts (W), Kilowatts (kW), Horsepower (hp), and BTU/hr.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Power Value",
        "type": "number",
        "defaultValue": 300,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 5
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "hp",
        "placeholder": "",
        "options": [
          {
            "label": "Horsepower (hp)",
            "value": "hp"
          },
          {
            "label": "Kilowatts (kW)",
            "value": "kw"
          },
          {
            "label": "Watts (W)",
            "value": "w"
          },
          {
            "label": "Megawatts (MW)",
            "value": "mw"
          },
          {
            "label": "BTU/hr",
            "value": "btuh"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "kw",
        "placeholder": "",
        "options": [
          {
            "label": "Kilowatts (kW)",
            "value": "kw"
          },
          {
            "label": "Horsepower (hp)",
            "value": "hp"
          },
          {
            "label": "Watts (W)",
            "value": "w"
          },
          {
            "label": "BTU/hr",
            "value": "btuh"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 Horsepower (mechanical) ≈ 745.7 Watts",
    "keywords": [
      "power converter",
      "hp to kw",
      "horsepower to watts",
      "electrical power"
    ]
  },
  {
    "id": "pressure-converter",
    "title": "Pressure Converter",
    "slug": "pressure-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between PSI, Bar, Pascal (Pa), Atmosphere (atm), and mmHg/Torr.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Pressure Value",
        "type": "number",
        "defaultValue": 32,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.5
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "psi",
        "placeholder": "",
        "options": [
          {
            "label": "Pounds per Sq Inch (psi)",
            "value": "psi"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "Atmospheres (atm)",
            "value": "atm"
          },
          {
            "label": "Kilopascals (kPa)",
            "value": "kpa"
          },
          {
            "label": "Pascals (Pa)",
            "value": "pa"
          },
          {
            "label": "mmHg / Torr",
            "value": "mmhg"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "bar",
        "placeholder": "",
        "options": [
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "Pounds per Sq Inch (psi)",
            "value": "psi"
          },
          {
            "label": "Kilopascals (kPa)",
            "value": "kpa"
          },
          {
            "label": "Atmospheres (atm)",
            "value": "atm"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 atm = 101,325 Pa = 1.01325 bar = 14.696 psi",
    "keywords": [
      "pressure converter",
      "psi to bar",
      "bar to psi",
      "atm to kpa",
      "tire pressure"
    ]
  },
  {
    "id": "frequency-converter",
    "title": "Frequency Converter",
    "slug": "frequency-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Hertz (Hz), Kilohertz (kHz), Megahertz (MHz), Gigahertz (GHz), and RPM.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Frequency Value",
        "type": "number",
        "defaultValue": 2.4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "ghz",
        "placeholder": "",
        "options": [
          {
            "label": "Gigahertz (GHz)",
            "value": "ghz"
          },
          {
            "label": "Megahertz (MHz)",
            "value": "mhz"
          },
          {
            "label": "Kilohertz (kHz)",
            "value": "khz"
          },
          {
            "label": "Hertz (Hz)",
            "value": "hz"
          },
          {
            "label": "Revolutions per min (RPM)",
            "value": "rpm"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "mhz",
        "placeholder": "",
        "options": [
          {
            "label": "Megahertz (MHz)",
            "value": "mhz"
          },
          {
            "label": "Gigahertz (GHz)",
            "value": "ghz"
          },
          {
            "label": "Hertz (Hz)",
            "value": "hz"
          },
          {
            "label": "Revolutions per min (RPM)",
            "value": "rpm"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 GHz = 1,000 MHz = 1,000,000 kHz = 1,000,000,000 Hz",
    "keywords": [
      "frequency converter",
      "ghz to mhz",
      "hz converter",
      "rpm to hz"
    ]
  },
  {
    "id": "angle-converter",
    "title": "Angle Converter",
    "slug": "angle-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Degrees (°), Radians (rad), Gradians (grad), and Arcminutes.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Angle Value",
        "type": "number",
        "defaultValue": 180,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "deg",
        "placeholder": "",
        "options": [
          {
            "label": "Degrees (°)",
            "value": "deg"
          },
          {
            "label": "Radians (rad)",
            "value": "rad"
          },
          {
            "label": "Gradians (grad)",
            "value": "grad"
          },
          {
            "label": "Arcminutes (arcmin)",
            "value": "arcmin"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "rad",
        "placeholder": "",
        "options": [
          {
            "label": "Radians (rad)",
            "value": "rad"
          },
          {
            "label": "Degrees (°)",
            "value": "deg"
          },
          {
            "label": "Gradians (grad)",
            "value": "grad"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Radians = Degrees × (π / 180)  |  Degrees = Radians × (180 / π)",
    "keywords": [
      "angle converter",
      "degrees to radians",
      "radians to degrees",
      "arcmin"
    ]
  },
  {
    "id": "fuel-economy-converter",
    "title": "Fuel Economy Converter",
    "slug": "fuel-economy-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between MPG (US), MPG (Imperial), L/100km, and km/L.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Fuel Economy Value",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.5
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "mpgus",
        "placeholder": "",
        "options": [
          {
            "label": "MPG (US)",
            "value": "mpgus"
          },
          {
            "label": "Liters per 100km (L/100km)",
            "value": "l100km"
          },
          {
            "label": "Kilometers per Liter (km/L)",
            "value": "kml"
          },
          {
            "label": "MPG (Imperial / UK)",
            "value": "mpguk"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "l100km",
        "placeholder": "",
        "options": [
          {
            "label": "Liters per 100km (L/100km)",
            "value": "l100km"
          },
          {
            "label": "MPG (US)",
            "value": "mpgus"
          },
          {
            "label": "Kilometers per Liter (km/L)",
            "value": "kml"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "L/100km = 235.215 / MPG (US)  |  km/L = MPG (US) / 2.352",
    "keywords": [
      "fuel economy converter",
      "mpg to l 100km",
      "gas mileage converter",
      "km l to mpg"
    ]
  },
  {
    "id": "torque-converter",
    "title": "Torque Converter",
    "slug": "torque-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Newton-meters (N·m), Foot-pounds (ft·lb), and Inch-pounds (in·lb).",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Torque Value",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 5
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "nm",
        "placeholder": "",
        "options": [
          {
            "label": "Newton-meters (N·m)",
            "value": "nm"
          },
          {
            "label": "Foot-pounds (ft·lb)",
            "value": "ftlb"
          },
          {
            "label": "Inch-pounds (in·lb)",
            "value": "inlb"
          },
          {
            "label": "Kilogram-force meters (kgf·m)",
            "value": "kgfm"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "ftlb",
        "placeholder": "",
        "options": [
          {
            "label": "Foot-pounds (ft·lb)",
            "value": "ftlb"
          },
          {
            "label": "Newton-meters (N·m)",
            "value": "nm"
          },
          {
            "label": "Inch-pounds (in·lb)",
            "value": "inlb"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 ft·lb = 1.35582 N·m  |  1 N·m = 0.73756 ft·lb",
    "keywords": [
      "torque converter",
      "nm to ft lb",
      "foot pounds to newton meters",
      "wrench torque"
    ]
  },
  {
    "id": "force-converter",
    "title": "Force Converter",
    "slug": "force-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between Newtons (N), Kilonewtons (kN), Pounds-force (lbf), and Dynes.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Force Value",
        "type": "number",
        "defaultValue": 500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 10
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "n",
        "placeholder": "",
        "options": [
          {
            "label": "Newtons (N)",
            "value": "n"
          },
          {
            "label": "Kilonewtons (kN)",
            "value": "kn"
          },
          {
            "label": "Pound-force (lbf)",
            "value": "lbf"
          },
          {
            "label": "Kilogram-force (kgf)",
            "value": "kgf"
          },
          {
            "label": "Dynes",
            "value": "dyne"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "lbf",
        "placeholder": "",
        "options": [
          {
            "label": "Pound-force (lbf)",
            "value": "lbf"
          },
          {
            "label": "Newtons (N)",
            "value": "n"
          },
          {
            "label": "Kilonewtons (kN)",
            "value": "kn"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 lbf ≈ 4.44822 Newtons  |  1 N = 10⁵ Dynes",
    "keywords": [
      "force converter",
      "newtons to lbf",
      "kn to newtons",
      "force units"
    ]
  },
  {
    "id": "mass-converter",
    "title": "Atomic & Metric Mass Converter",
    "slug": "mass-converter",
    "category": "unit-converters",
    "shortDesc": "Convert mass between Metric grams, Micrograms, Atomic Mass Units (u), and Carats.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Mass Value",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "g",
        "placeholder": "",
        "options": [
          {
            "label": "Grams (g)",
            "value": "g"
          },
          {
            "label": "Milligrams (mg)",
            "value": "mg"
          },
          {
            "label": "Micrograms (µg)",
            "value": "ug"
          },
          {
            "label": "Carats (ct)",
            "value": "ct"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "ct",
        "placeholder": "",
        "options": [
          {
            "label": "Carats (ct)",
            "value": "ct"
          },
          {
            "label": "Milligrams (mg)",
            "value": "mg"
          },
          {
            "label": "Grams (g)",
            "value": "g"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "1 Carat = 0.2 grams = 200 mg",
    "keywords": [
      "mass converter",
      "carats to grams",
      "milligrams to grams",
      "precision mass"
    ]
  },
  {
    "id": "time-converter",
    "title": "Time Unit Converter",
    "slug": "time-converter",
    "category": "unit-converters",
    "shortDesc": "Convert between milliseconds, seconds, minutes, hours, days, weeks, and years.",
    "badge": "",
    "fields": [
      {
        "id": "value",
        "label": "Time Value",
        "type": "number",
        "defaultValue": 48,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "fromUnit",
        "label": "From Unit",
        "type": "select",
        "defaultValue": "hours",
        "placeholder": "",
        "options": [
          {
            "label": "Hours",
            "value": "hours"
          },
          {
            "label": "Days",
            "value": "days"
          },
          {
            "label": "Minutes",
            "value": "minutes"
          },
          {
            "label": "Seconds",
            "value": "seconds"
          },
          {
            "label": "Weeks",
            "value": "weeks"
          }
        ],
        "unit": ""
      },
      {
        "id": "toUnit",
        "label": "To Unit",
        "type": "select",
        "defaultValue": "days",
        "placeholder": "",
        "options": [
          {
            "label": "Days",
            "value": "days"
          },
          {
            "label": "Hours",
            "value": "hours"
          },
          {
            "label": "Minutes",
            "value": "minutes"
          },
          {
            "label": "Seconds",
            "value": "seconds"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Time_to = Time_from × (Factor_from / Factor_to)",
    "keywords": [
      "time converter",
      "hours to days",
      "minutes to seconds",
      "weeks to hours"
    ]
  },
  {
    "id": "concrete-calculator",
    "title": "Concrete Slab & Footing Calculator",
    "slug": "concrete-calculator",
    "category": "construction",
    "shortDesc": "Compute cubic yards or meters of concrete and count 60lb/80lb bags needed.",
    "badge": "popular",
    "fields": [
      {
        "id": "lengthFt",
        "label": "Slab Length (Feet)",
        "type": "number",
        "defaultValue": 20,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      },
      {
        "id": "widthFt",
        "label": "Slab Width (Feet)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      },
      {
        "id": "thicknessIn",
        "label": "Thickness (Inches)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "wastePct",
        "label": "Waste Allowance (%)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 30,
        "step": 1
      }
    ],
    "formula": "Cubic Yards = (Length ft × Width ft × (Thickness in / 12)) / 27 × (1 + Waste)",
    "keywords": [
      "concrete calculator",
      "cement bags",
      "slab volume",
      "cubic yards of concrete"
    ]
  },
  {
    "id": "brick-calculator",
    "title": "Brick Wall Calculator",
    "slug": "brick-calculator",
    "category": "construction",
    "shortDesc": "Calculate total standard bricks and mortar bags needed for a wall.",
    "badge": "",
    "fields": [
      {
        "id": "wallLength",
        "label": "Wall Length (Feet)",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "wallHeight",
        "label": "Wall Height (Feet)",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "brickType",
        "label": "Brick Course Type",
        "type": "select",
        "defaultValue": "single",
        "placeholder": "",
        "options": [
          {
            "label": "Single Wythe (Standard 7 bricks / sq ft)",
            "value": "single"
          },
          {
            "label": "Double Wythe (Double wall 14 bricks / sq ft)",
            "value": "double"
          }
        ],
        "unit": ""
      },
      {
        "id": "waste",
        "label": "Waste Factor (%)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 25,
        "step": 1
      }
    ],
    "formula": "Bricks = Length × Height × Bricks_per_sqft × (1 + Waste)",
    "keywords": [
      "brick calculator",
      "masonry estimator",
      "how many bricks",
      "mortar bags"
    ]
  },
  {
    "id": "cement-calculator",
    "title": "Cement, Sand & Gravel Mix Calculator",
    "slug": "cement-calculator",
    "category": "construction",
    "shortDesc": "Compute component quantities for 1:2:4 standard concrete mix proportions.",
    "badge": "",
    "fields": [
      {
        "id": "volumeCuM",
        "label": "Desired Concrete Volume (m³)",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.25
      }
    ],
    "formula": "Dry Volume = Wet Volume × 1.54  |  Cement = (1/7) × Dry Vol × 1440 kg/m³",
    "keywords": [
      "cement calculator",
      "concrete mix ratio",
      "sand and gravel mix",
      "50kg cement bags"
    ]
  },
  {
    "id": "sand-calculator",
    "title": "Sand Volume & Weight Calculator",
    "slug": "sand-calculator",
    "category": "construction",
    "shortDesc": "Compute cubic yards and tons of sand needed for paving, landscaping, or masonry.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Area Length (Feet)",
        "type": "number",
        "defaultValue": 20,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "width",
        "label": "Area Width (Feet)",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "depthIn",
        "label": "Depth (Inches)",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.5,
        "step": 0.5
      }
    ],
    "formula": "Tons = (Length ft × Width ft × Depth ft / 27) × 1.35 tons/yd³",
    "keywords": [
      "sand calculator",
      "paver sand",
      "cubic yards of sand",
      "tons of sand"
    ]
  },
  {
    "id": "tile-calculator",
    "title": "Tile Calculator",
    "slug": "tile-calculator",
    "category": "construction",
    "shortDesc": "Compute total floor or wall tiles and boxes required including cut waste.",
    "badge": "popular",
    "fields": [
      {
        "id": "roomLength",
        "label": "Room Length (Feet)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "roomWidth",
        "label": "Room Width (Feet)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "tileLengthIn",
        "label": "Tile Length (Inches)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "tileWidthIn",
        "label": "Tile Width (Inches)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "wastePct",
        "label": "Waste Buffer (%)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "max": 25,
        "step": 1
      }
    ],
    "formula": "Total Tiles = (Room Sq Ft / Tile Sq Ft) × (1 + Waste Factor)",
    "keywords": [
      "tile calculator",
      "flooring tiles",
      "bathroom tile estimator",
      "ceramic tile"
    ]
  },
  {
    "id": "flooring-calculator",
    "title": "Flooring Calculator (Hardwood / Laminate)",
    "slug": "flooring-calculator",
    "category": "construction",
    "shortDesc": "Compute square footage and number of flooring boxes required.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Room Length (Feet)",
        "type": "number",
        "defaultValue": 18,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "width",
        "label": "Room Width (Feet)",
        "type": "number",
        "defaultValue": 14,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "sqftPerBox",
        "label": "Coverage per Box (Sq Ft)",
        "type": "number",
        "defaultValue": 24,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "step": 1
      },
      {
        "id": "wastePct",
        "label": "Wastage Margin (%)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      }
    ],
    "formula": "Boxes = ceil((Room Length × Width × (1 + Waste)) / Box Coverage)",
    "keywords": [
      "flooring calculator",
      "hardwood calculator",
      "laminate flooring",
      "lvp flooring"
    ]
  },
  {
    "id": "paint-calculator",
    "title": "Paint Calculator",
    "slug": "paint-calculator",
    "category": "construction",
    "shortDesc": "Calculate gallons or liters of wall paint required for any room.",
    "badge": "popular",
    "fields": [
      {
        "id": "length",
        "label": "Room Length (Feet)",
        "type": "number",
        "defaultValue": 16,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "width",
        "label": "Room Width (Feet)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Ceiling Height (Feet)",
        "type": "number",
        "defaultValue": 9,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 6,
        "step": 0.5
      },
      {
        "id": "doors",
        "label": "Number of Doors",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      },
      {
        "id": "windows",
        "label": "Number of Windows",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      },
      {
        "id": "coats",
        "label": "Number of Coats",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 4,
        "step": 1
      }
    ],
    "formula": "Gallons = ((2(L + W) × H - Doors×21 - Windows×15) × Coats) / 350",
    "keywords": [
      "paint calculator",
      "gallons of paint",
      "wall paint estimator",
      "interior paint"
    ]
  },
  {
    "id": "roofing-calculator",
    "title": "Roofing Shingles Calculator",
    "slug": "roofing-calculator",
    "category": "construction",
    "shortDesc": "Compute roof pitch multiplier, roof squares, and bundles of shingles needed.",
    "badge": "",
    "fields": [
      {
        "id": "houseLength",
        "label": "Base Building Length (Feet)",
        "type": "number",
        "defaultValue": 40,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "houseWidth",
        "label": "Base Building Width (Feet)",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "pitch",
        "label": "Roof Pitch (Rise/12)",
        "type": "select",
        "defaultValue": "6",
        "placeholder": "",
        "options": [
          {
            "label": "Flat (0/12) [× 1.00]",
            "value": "0"
          },
          {
            "label": "Low Pitch (4/12) [× 1.054]",
            "value": "4"
          },
          {
            "label": "Medium Pitch (6/12) [× 1.118]",
            "value": "6"
          },
          {
            "label": "Standard Pitch (8/12) [× 1.202]",
            "value": "8"
          },
          {
            "label": "Steep Pitch (10/12) [× 1.302]",
            "value": "10"
          },
          {
            "label": "Mansard (12/12) [× 1.414]",
            "value": "12"
          }
        ],
        "unit": ""
      },
      {
        "id": "wastePct",
        "label": "Waste Buffer (%)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "max": 25,
        "step": 1
      }
    ],
    "formula": "Squares = (Footprint Area × Pitch Multiplier × (1 + Waste)) / 100",
    "keywords": [
      "roofing calculator",
      "roof squares",
      "shingle bundles",
      "roof pitch multiplier"
    ]
  },
  {
    "id": "wall-area-calculator",
    "title": "Wall Area Calculator",
    "slug": "wall-area-calculator",
    "category": "construction",
    "shortDesc": "Compute total wall surface area deducting windows and doorways.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Room Length (Feet)",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "width",
        "label": "Room Width (Feet)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Wall Height (Feet)",
        "type": "number",
        "defaultValue": 9,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 6,
        "step": 0.5
      },
      {
        "id": "deductions",
        "label": "Total Deductions (Doors/Windows in Sq Ft)",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 5
      }
    ],
    "formula": "Net Area = (2 × (Length + Width) × Height) - Deductions",
    "keywords": [
      "wall area calculator",
      "drywall estimator",
      "square feet of walls"
    ]
  },
  {
    "id": "stair-calculator",
    "title": "Stair Calculator",
    "slug": "stair-calculator",
    "category": "construction",
    "shortDesc": "Compute number of risers, tread depth, stair run, stringer length, and incline angle.",
    "badge": "",
    "fields": [
      {
        "id": "totalRiseIn",
        "label": "Total Rise / Height (Inches)",
        "type": "number",
        "defaultValue": 108,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 12,
        "step": 0.5
      },
      {
        "id": "targetRiserIn",
        "label": "Target Riser Height (Inches)",
        "type": "number",
        "defaultValue": 7.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "max": 9,
        "step": 0.25
      }
    ],
    "formula": "Risers = Total Rise / Target Riser  |  Stringer = √(Rise² + Run²)",
    "keywords": [
      "stair calculator",
      "stair stringer",
      "riser and tread",
      "staircase builder"
    ]
  },
  {
    "id": "gravel-calculator",
    "title": "Gravel Calculator",
    "slug": "gravel-calculator",
    "category": "construction",
    "shortDesc": "Compute tons and cubic yards of crushed stone or gravel for driveways and paths.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Length (Feet)",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "width",
        "label": "Width (Feet)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "depthIn",
        "label": "Depth (Inches)",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 0.5
      }
    ],
    "formula": "Tons = (Length ft × Width ft × Depth ft / 27) × 1.4",
    "keywords": [
      "gravel calculator",
      "crushed stone",
      "gravel driveway",
      "tons of rock"
    ]
  },
  {
    "id": "mulch-calculator",
    "title": "Mulch Calculator",
    "slug": "mulch-calculator",
    "category": "construction",
    "shortDesc": "Calculate garden mulch in bulk cubic yards or 2 cu ft / 3 cu ft bags.",
    "badge": "",
    "fields": [
      {
        "id": "length",
        "label": "Bed Length (Feet)",
        "type": "number",
        "defaultValue": 30,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "width",
        "label": "Bed Width (Feet)",
        "type": "number",
        "defaultValue": 8,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "depthIn",
        "label": "Mulch Depth (Inches)",
        "type": "number",
        "defaultValue": 3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 6,
        "step": 0.5
      }
    ],
    "formula": "Cubic Yards = (Length ft × Width ft × Depth ft) / 27",
    "keywords": [
      "mulch calculator",
      "landscape mulch",
      "cubic yards of mulch",
      "mulch bags"
    ]
  },
  {
    "id": "ohms-law-calculator",
    "title": "Ohm's Law Calculator",
    "slug": "ohms-law-calculator",
    "category": "electrical",
    "shortDesc": "Solve for Voltage, Current, Resistance, or Power given any two knowns.",
    "badge": "popular",
    "fields": [
      {
        "id": "voltage",
        "label": "Voltage (V in Volts)",
        "type": "number",
        "defaultValue": 120,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "current",
        "label": "Current (I in Amperes)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "V = I × R  |  P = V × I  |  R = V / I  |  I = V / R",
    "keywords": [
      "ohm's law",
      "voltage",
      "current",
      "resistance",
      "watts",
      "amps",
      "ohms"
    ]
  },
  {
    "id": "voltage-calculator",
    "title": "Voltage Calculator",
    "slug": "voltage-calculator",
    "category": "electrical",
    "shortDesc": "Compute voltage across a load from current and resistance (V = I × R) or power.",
    "badge": "",
    "fields": [
      {
        "id": "current",
        "label": "Current (Amps)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      },
      {
        "id": "resistance",
        "label": "Resistance (Ohms)",
        "type": "number",
        "defaultValue": 24,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.5
      }
    ],
    "formula": "V = I × R  |  V = P / I  |  V = √(P × R)",
    "keywords": [
      "voltage calculator",
      "electric potential",
      "volts",
      "ohm law voltage"
    ]
  },
  {
    "id": "current-calculator",
    "title": "Current Calculator (Amps)",
    "slug": "current-calculator",
    "category": "electrical",
    "shortDesc": "Compute electrical current in Amperes from power and voltage or resistance.",
    "badge": "",
    "fields": [
      {
        "id": "power",
        "label": "Power (Watts)",
        "type": "number",
        "defaultValue": 1500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 50
      },
      {
        "id": "voltage",
        "label": "Voltage (Volts)",
        "type": "number",
        "defaultValue": 120,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      }
    ],
    "formula": "I = P / V  |  I = V / R  |  I = √(P / R)",
    "keywords": [
      "current calculator",
      "amperage calculator",
      "amps from watts",
      "draw current"
    ]
  },
  {
    "id": "resistance-calculator",
    "title": "Resistance Calculator",
    "slug": "resistance-calculator",
    "category": "electrical",
    "shortDesc": "Compute electrical resistance in Ohms from voltage, current, or power.",
    "badge": "",
    "fields": [
      {
        "id": "voltage",
        "label": "Voltage (Volts)",
        "type": "number",
        "defaultValue": 24,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 1
      },
      {
        "id": "power",
        "label": "Power (Watts)",
        "type": "number",
        "defaultValue": 48,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 1
      }
    ],
    "formula": "R = V / I  |  R = V² / P  |  R = P / I²",
    "keywords": [
      "resistance calculator",
      "ohms",
      "circuit resistance",
      "resistor value"
    ]
  },
  {
    "id": "power-calculator",
    "title": "Electrical Power Calculator (Watts)",
    "slug": "power-calculator",
    "category": "electrical",
    "shortDesc": "Compute power dissipation in Watts from voltage, current, and resistance.",
    "badge": "popular",
    "fields": [
      {
        "id": "voltage",
        "label": "Voltage (Volts)",
        "type": "number",
        "defaultValue": 120,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 1
      },
      {
        "id": "current",
        "label": "Current (Amps)",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      }
    ],
    "formula": "P = V × I  |  P = I² × R  |  P = V² / R",
    "keywords": [
      "power calculator",
      "watts calculator",
      "volts to watts",
      "electrical load"
    ]
  },
  {
    "id": "electrical-cost-calculator",
    "title": "Electricity Cost Calculator",
    "slug": "electrical-cost-calculator",
    "category": "electrical",
    "shortDesc": "Compute daily, monthly, and annual running cost of any electrical appliance.",
    "badge": "popular",
    "fields": [
      {
        "id": "wattage",
        "label": "Appliance Power (Watts)",
        "type": "number",
        "defaultValue": 1500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 50
      },
      {
        "id": "hoursPerDay",
        "label": "Hours Used per Day",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "max": 24,
        "step": 0.5
      },
      {
        "id": "ratePerKwh",
        "label": "Electricity Cost ($ per kWh)",
        "type": "number",
        "defaultValue": 0.16,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.01
      }
    ],
    "formula": "Cost = (Watts × Hours / 1000) × Cost_per_kWh",
    "keywords": [
      "electricity cost calculator",
      "kwh cost",
      "appliance running cost",
      "electric bill"
    ]
  },
  {
    "id": "resistor-calculator",
    "title": "Resistor Color Code Calculator",
    "slug": "resistor-calculator",
    "category": "electrical",
    "shortDesc": "Decode 4-band resistor color codes to resistance value and tolerance.",
    "badge": "",
    "fields": [
      {
        "id": "band1",
        "label": "1st Band (Digit)",
        "type": "select",
        "defaultValue": "4",
        "placeholder": "",
        "options": [
          {
            "label": "Brown (1)",
            "value": "1"
          },
          {
            "label": "Red (2)",
            "value": "2"
          },
          {
            "label": "Orange (3)",
            "value": "3"
          },
          {
            "label": "Yellow (4)",
            "value": "4"
          },
          {
            "label": "Green (5)",
            "value": "5"
          },
          {
            "label": "Blue (6)",
            "value": "6"
          },
          {
            "label": "Violet (7)",
            "value": "7"
          },
          {
            "label": "Grey (8)",
            "value": "8"
          },
          {
            "label": "White (9)",
            "value": "9"
          }
        ],
        "unit": ""
      },
      {
        "id": "band2",
        "label": "2nd Band (Digit)",
        "type": "select",
        "defaultValue": "7",
        "placeholder": "",
        "options": [
          {
            "label": "Black (0)",
            "value": "0"
          },
          {
            "label": "Brown (1)",
            "value": "1"
          },
          {
            "label": "Red (2)",
            "value": "2"
          },
          {
            "label": "Orange (3)",
            "value": "3"
          },
          {
            "label": "Yellow (4)",
            "value": "4"
          },
          {
            "label": "Green (5)",
            "value": "5"
          },
          {
            "label": "Blue (6)",
            "value": "6"
          },
          {
            "label": "Violet (7)",
            "value": "7"
          },
          {
            "label": "Grey (8)",
            "value": "8"
          },
          {
            "label": "White (9)",
            "value": "9"
          }
        ],
        "unit": ""
      },
      {
        "id": "multiplier",
        "label": "3rd Band (Multiplier)",
        "type": "select",
        "defaultValue": "100",
        "placeholder": "",
        "options": [
          {
            "label": "Black (×1)",
            "value": "1"
          },
          {
            "label": "Brown (×10)",
            "value": "10"
          },
          {
            "label": "Red (×100)",
            "value": "100"
          },
          {
            "label": "Orange (×1k)",
            "value": "1000"
          },
          {
            "label": "Yellow (×10k)",
            "value": "10000"
          },
          {
            "label": "Green (×100k)",
            "value": "100000"
          },
          {
            "label": "Blue (×1M)",
            "value": "1000000"
          },
          {
            "label": "Gold (×0.1)",
            "value": "0.1"
          },
          {
            "label": "Silver (×0.01)",
            "value": "0.01"
          }
        ],
        "unit": ""
      },
      {
        "id": "tolerance",
        "label": "4th Band (Tolerance)",
        "type": "select",
        "defaultValue": "5",
        "placeholder": "",
        "options": [
          {
            "label": "Gold (±5%)",
            "value": "5"
          },
          {
            "label": "Silver (±10%)",
            "value": "10"
          },
          {
            "label": "Brown (±1%)",
            "value": "1"
          },
          {
            "label": "Red (±2%)",
            "value": "2"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "Resistance = (Digit 1 × 10 + Digit 2) × Multiplier ± Tolerance %",
    "keywords": [
      "resistor color code",
      "resistor calculator",
      "ohms color bands",
      "electronic components"
    ]
  },
  {
    "id": "series-parallel-calculator",
    "title": "Series & Parallel Resistance Calculator",
    "slug": "series-parallel-calculator",
    "category": "electrical",
    "shortDesc": "Calculate total equivalent resistance for resistors in series or parallel.",
    "badge": "",
    "fields": [
      {
        "id": "r1",
        "label": "Resistor 1 (Ohms)",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 10
      },
      {
        "id": "r2",
        "label": "Resistor 2 (Ohms)",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 10
      },
      {
        "id": "r3",
        "label": "Resistor 3 (Ohms) (optional)",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 10
      }
    ],
    "formula": "Series: R_total = R₁ + R₂ + ...  |  Parallel: 1/R_total = 1/R₁ + 1/R₂ + ...",
    "keywords": [
      "series parallel resistance",
      "equivalent resistance",
      "parallel resistors",
      "circuit builder"
    ]
  },
  {
    "id": "energy-calculator",
    "title": "Electrical Energy Calculator",
    "slug": "energy-calculator",
    "category": "electrical",
    "shortDesc": "Calculate total electrical energy in Watt-hours and Joules (E = P × t).",
    "badge": "",
    "fields": [
      {
        "id": "powerWatts",
        "label": "Power (Watts)",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 10
      },
      {
        "id": "hours",
        "label": "Time of Operation (Hours)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 1
      }
    ],
    "formula": "Energy (Wh) = Power (W) × Time (h)  |  1 kWh = 3,600,000 Joules",
    "keywords": [
      "electrical energy",
      "kwh calculator",
      "watt hours",
      "energy consumption"
    ]
  },
  {
    "id": "force-calculator",
    "title": "Force Calculator (Newton Second Law)",
    "slug": "force-calculator",
    "category": "physics",
    "shortDesc": "Calculate net force from mass and acceleration using Newton’s Second Law F = m × a.",
    "badge": "popular",
    "fields": [
      {
        "id": "mass",
        "label": "Mass (m in kg)",
        "type": "number",
        "defaultValue": 1200,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 1
      },
      {
        "id": "acceleration",
        "label": "Acceleration (a in m/s²)",
        "type": "number",
        "defaultValue": 3.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      }
    ],
    "formula": "F = m × a (Force = Mass × Acceleration)",
    "keywords": [
      "force calculator",
      "f=ma",
      "newton second law",
      "acceleration to force"
    ]
  },
  {
    "id": "kinetic-energy-calculator",
    "title": "Kinetic Energy Calculator",
    "slug": "kinetic-energy-calculator",
    "category": "physics",
    "shortDesc": "Compute the kinetic energy of a moving object from mass and velocity (KE = ½mv²).",
    "badge": "popular",
    "fields": [
      {
        "id": "massKg",
        "label": "Mass (kg)",
        "type": "number",
        "defaultValue": 1500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 10
      },
      {
        "id": "velocityMs",
        "label": "Velocity (m/s)",
        "type": "number",
        "defaultValue": 25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      }
    ],
    "formula": "KE = ½ × m × v²",
    "keywords": [
      "kinetic energy calculator",
      "ke = 1/2 mv2",
      "joules calculator",
      "motion energy"
    ]
  },
  {
    "id": "potential-energy-calculator",
    "title": "Gravitational Potential Energy Calculator",
    "slug": "potential-energy-calculator",
    "category": "physics",
    "shortDesc": "Compute gravitational potential energy of an elevated mass (PE = m × g × h).",
    "badge": "",
    "fields": [
      {
        "id": "massKg",
        "label": "Mass (kg)",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "heightM",
        "label": "Height above ground (m)",
        "type": "number",
        "defaultValue": 20,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      },
      {
        "id": "gravity",
        "label": "Gravitational Acceleration (g in m/s²)",
        "type": "number",
        "defaultValue": 9.80665,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.01
      }
    ],
    "formula": "PE = m × g × h",
    "keywords": [
      "potential energy",
      "pe = mgh",
      "gravitational energy",
      "physics"
    ]
  },
  {
    "id": "velocity-calculator",
    "title": "Velocity & Speed Calculator",
    "slug": "velocity-calculator",
    "category": "physics",
    "shortDesc": "Compute velocity from distance and time (v = d / t) with acceleration models.",
    "badge": "",
    "fields": [
      {
        "id": "distanceM",
        "label": "Distance Traveled (Meters)",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 1
      },
      {
        "id": "timeSec",
        "label": "Time Elapsed (Seconds)",
        "type": "number",
        "defaultValue": 9.58,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.01
      }
    ],
    "formula": "v = d / t",
    "keywords": [
      "velocity calculator",
      "speed calculator",
      "v = d/t",
      "meters per second to kmh"
    ]
  },
  {
    "id": "acceleration-calculator",
    "title": "Acceleration Calculator",
    "slug": "acceleration-calculator",
    "category": "physics",
    "shortDesc": "Compute acceleration rate from initial velocity, final velocity, and elapsed time.",
    "badge": "",
    "fields": [
      {
        "id": "vInitial",
        "label": "Initial Velocity v₀ (m/s)",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "vFinal",
        "label": "Final Velocity v (m/s)",
        "type": "number",
        "defaultValue": 27.78,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "time",
        "label": "Time Elapsed t (Seconds)",
        "type": "number",
        "defaultValue": 3.2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.1
      }
    ],
    "formula": "a = (v - v₀) / t  |  d = v₀t + ½at²",
    "keywords": [
      "acceleration calculator",
      "rate of change of speed",
      "g force",
      "0 to 60 acceleration"
    ]
  },
  {
    "id": "work-calculator",
    "title": "Work Calculator",
    "slug": "work-calculator",
    "category": "physics",
    "shortDesc": "Compute mechanical work in Joules from force, displacement, and angle (W = F × d × cos θ).",
    "badge": "",
    "fields": [
      {
        "id": "forceN",
        "label": "Force (Newtons)",
        "type": "number",
        "defaultValue": 150,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 5
      },
      {
        "id": "distanceM",
        "label": "Displacement (Meters)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.5
      },
      {
        "id": "angleDeg",
        "label": "Angle θ (Degrees between Force and Motion)",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 180,
        "step": 5
      }
    ],
    "formula": "W = F × d × cos(θ)",
    "keywords": [
      "work calculator",
      "physics work",
      "joules",
      "force times distance"
    ]
  },
  {
    "id": "momentum-calculator",
    "title": "Linear Momentum Calculator",
    "slug": "momentum-calculator",
    "category": "physics",
    "shortDesc": "Compute linear momentum of a moving mass (p = m × v).",
    "badge": "",
    "fields": [
      {
        "id": "massKg",
        "label": "Mass (kg)",
        "type": "number",
        "defaultValue": 80,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "velocityMs",
        "label": "Velocity (m/s)",
        "type": "number",
        "defaultValue": 12,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.5
      }
    ],
    "formula": "p = m × v",
    "keywords": [
      "momentum calculator",
      "linear momentum",
      "p=mv",
      "collision physics"
    ]
  },
  {
    "id": "density-calculator",
    "title": "Density Calculator (ρ = m / V)",
    "slug": "density-calculator",
    "category": "physics",
    "shortDesc": "Compute physical density from mass and volume or solve for unknown mass.",
    "badge": "",
    "fields": [
      {
        "id": "mass",
        "label": "Mass (kg)",
        "type": "number",
        "defaultValue": 19.3,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      },
      {
        "id": "volume",
        "label": "Volume (Liters)",
        "type": "number",
        "defaultValue": 1,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      }
    ],
    "formula": "ρ = m / V  |  Specific Gravity = ρ_substance / ρ_water",
    "keywords": [
      "density calculator",
      "mass over volume",
      "specific gravity",
      "material density"
    ]
  },
  {
    "id": "pressure-physics-calculator",
    "title": "Physical Pressure Calculator",
    "slug": "pressure-physics-calculator",
    "category": "physics",
    "shortDesc": "Compute pressure in Pascals and atmospheres from applied force and contact surface area.",
    "badge": "",
    "fields": [
      {
        "id": "forceN",
        "label": "Applied Force (Newtons)",
        "type": "number",
        "defaultValue": 5000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 100
      },
      {
        "id": "areaM2",
        "label": "Contact Surface Area (m²)",
        "type": "number",
        "defaultValue": 0.05,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.0001,
        "step": 0.005
      }
    ],
    "formula": "P = F / A (1 Pascal = 1 Newton / m²)",
    "keywords": [
      "pressure calculator",
      "p = f/a",
      "pascals",
      "surface pressure"
    ]
  },
  {
    "id": "molarity-calculator",
    "title": "Molarity Calculator",
    "slug": "molarity-calculator",
    "category": "chemistry",
    "shortDesc": "Calculate molar concentration M (moles of solute per liter of solution).",
    "badge": "popular",
    "fields": [
      {
        "id": "massGrams",
        "label": "Mass of Solute (g)",
        "type": "number",
        "defaultValue": 58.44,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      },
      {
        "id": "molarMass",
        "label": "Molar Mass of Solute (g/mol)",
        "type": "number",
        "defaultValue": 58.44,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.01
      },
      {
        "id": "volumeLiters",
        "label": "Solution Volume (Liters)",
        "type": "number",
        "defaultValue": 1,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      }
    ],
    "formula": "M = (Mass / Molar Mass) / Volume (Liters)",
    "keywords": [
      "molarity calculator",
      "moles per liter",
      "solution concentration",
      "solute chemistry"
    ]
  },
  {
    "id": "dilution-calculator",
    "title": "Dilution Calculator (C₁V₁ = C₂V₂)",
    "slug": "dilution-calculator",
    "category": "chemistry",
    "shortDesc": "Calculate required stock solution volume or diluted concentration.",
    "badge": "popular",
    "fields": [
      {
        "id": "c1",
        "label": "Stock Concentration C₁",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.5
      },
      {
        "id": "c2",
        "label": "Desired Concentration C₂",
        "type": "number",
        "defaultValue": 1,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      },
      {
        "id": "v2",
        "label": "Desired Final Volume V₂ (mL)",
        "type": "number",
        "defaultValue": 500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 10
      }
    ],
    "formula": "C₁ × V₁ = C₂ × V₂  =>  V₁ = (C₂ × V₂) / C₁",
    "keywords": [
      "dilution calculator",
      "c1v1 = c2v2",
      "serial dilution",
      "stock solution"
    ]
  },
  {
    "id": "ph-calculator",
    "title": "pH & pOH Calculator",
    "slug": "ph-calculator",
    "category": "chemistry",
    "shortDesc": "Compute pH, pOH, and hydronium ion concentration [H+] in aqueous solutions.",
    "badge": "popular",
    "fields": [
      {
        "id": "hConcentration",
        "label": "Hydrogen Ion [H+] Concentration (mol/L)",
        "type": "number",
        "defaultValue": 0.0001,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1e-15,
        "max": 14,
        "step": 0.0001
      }
    ],
    "formula": "pH = -log₁₀[H⁺]  |  pOH = 14 - pH  |  [OH⁻] = 10^(-pOH)",
    "keywords": [
      "ph calculator",
      "poh calculator",
      "acidic or basic",
      "hydrogen ion concentration"
    ]
  },
  {
    "id": "gas-law-calculator",
    "title": "Ideal Gas Law Calculator (PV = nRT)",
    "slug": "gas-law-calculator",
    "category": "chemistry",
    "shortDesc": "Solve for Pressure, Volume, Moles, or Temperature using the ideal gas equation.",
    "badge": "",
    "fields": [
      {
        "id": "moles",
        "label": "Amount of Gas (n in moles)",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      },
      {
        "id": "temperatureC",
        "label": "Temperature (°C)",
        "type": "number",
        "defaultValue": 25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 1
      },
      {
        "id": "volumeLiters",
        "label": "Volume (Liters)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.5
      }
    ],
    "formula": "P × V = n × R × T where R = 0.08206 L·atm/(mol·K)",
    "keywords": [
      "ideal gas law",
      "pv = nrt",
      "gas pressure",
      "gas constant r"
    ]
  },
  {
    "id": "mole-calculator",
    "title": "Mole & Particle Calculator",
    "slug": "mole-calculator",
    "category": "chemistry",
    "shortDesc": "Convert grams of substance to moles and Avogadro count of molecules.",
    "badge": "",
    "fields": [
      {
        "id": "massGrams",
        "label": "Mass (Grams)",
        "type": "number",
        "defaultValue": 18.015,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.0001,
        "step": 0.1
      },
      {
        "id": "molarMass",
        "label": "Molar Mass (g/mol)",
        "type": "number",
        "defaultValue": 18.015,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 0.01
      }
    ],
    "formula": "n = m / M  |  N = n × N_A (where N_A = 6.022 × 10²³)",
    "keywords": [
      "mole calculator",
      "avogadro number",
      "grams to moles",
      "particle count"
    ]
  },
  {
    "id": "molar-mass-calculator",
    "title": "Molar Mass Chemical Calculator",
    "slug": "molar-mass-calculator",
    "category": "chemistry",
    "shortDesc": "Compute molecular weight for chemical formulas (e.g. H2O, C6H12O6, H2SO4).",
    "badge": "",
    "fields": [
      {
        "id": "formula",
        "label": "Chemical Formula",
        "type": "text",
        "defaultValue": "C6H12O6",
        "placeholder": "e.g. H2O, C6H12O6, H2SO4, NaCl",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Molar Mass = Sum(Number of Atoms × Atomic Weight of Element)",
    "keywords": [
      "molar mass calculator",
      "molecular weight",
      "chemical formula weight",
      "periodic table mass"
    ]
  },
  {
    "id": "molality-calculator",
    "title": "Molality Calculator (m)",
    "slug": "molality-calculator",
    "category": "chemistry",
    "shortDesc": "Calculate molal concentration (moles of solute per kilogram of solvent).",
    "badge": "",
    "fields": [
      {
        "id": "moles",
        "label": "Moles of Solute (mol)",
        "type": "number",
        "defaultValue": 0.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      },
      {
        "id": "solventKg",
        "label": "Mass of Solvent (kg)",
        "type": "number",
        "defaultValue": 1.2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      }
    ],
    "formula": "m = Moles of Solute / Kilograms of Solvent",
    "keywords": [
      "molality calculator",
      "mol/kg",
      "colligative properties",
      "solvent mass"
    ]
  },
  {
    "id": "percentage-composition-calculator",
    "title": "Percent Composition Calculator",
    "slug": "percentage-composition-calculator",
    "category": "chemistry",
    "shortDesc": "Find the mass percent of each element in a binary chemical compound.",
    "badge": "",
    "fields": [
      {
        "id": "element1Mass",
        "label": "Mass of Element 1 (g)",
        "type": "number",
        "defaultValue": 12.011,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      },
      {
        "id": "element2Mass",
        "label": "Mass of Element 2 (g)",
        "type": "number",
        "defaultValue": 31.998,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      }
    ],
    "formula": "% Composition = (Mass of Element / Total Molecular Mass) × 100%",
    "keywords": [
      "percentage composition",
      "mass percent",
      "chemical compound percent"
    ]
  },
  {
    "id": "standard-deviation-calculator",
    "title": "Standard Deviation & Variance Calculator",
    "slug": "standard-deviation-calculator",
    "category": "statistics",
    "shortDesc": "Calculate sample and population standard deviation, variance, and mean for any dataset.",
    "badge": "popular",
    "fields": [
      {
        "id": "dataset",
        "label": "Dataset (comma or space separated numbers)",
        "type": "text",
        "defaultValue": "10, 12, 23, 23, 16, 23, 21, 16",
        "placeholder": "10, 12, 23, 23, 16",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Sample: s = √(Σ(x - x̄)² / (n - 1))  |  Population: σ = √(Σ(x - μ)² / N)",
    "keywords": [
      "standard deviation calculator",
      "variance",
      "sample sd",
      "population sd",
      "dataset dispersion"
    ]
  },
  {
    "id": "z-score-calculator",
    "title": "Z-Score & Normal Distribution Calculator",
    "slug": "z-score-calculator",
    "category": "statistics",
    "shortDesc": "Compute standard score z and percentile probability under the normal distribution.",
    "badge": "",
    "fields": [
      {
        "id": "rawScore",
        "label": "Raw Score (x)",
        "type": "number",
        "defaultValue": 85,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "mean",
        "label": "Population Mean (μ)",
        "type": "number",
        "defaultValue": 70,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.1
      },
      {
        "id": "stdDev",
        "label": "Standard Deviation (σ)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.001,
        "step": 0.1
      }
    ],
    "formula": "z = (x - μ) / σ",
    "keywords": [
      "z score calculator",
      "standard score",
      "normal distribution",
      "percentile calculator"
    ]
  },
  {
    "id": "sample-size-calculator",
    "title": "Sample Size Calculator",
    "slug": "sample-size-calculator",
    "category": "statistics",
    "shortDesc": "Determine required survey sample size based on margin of error and confidence level.",
    "badge": "popular",
    "fields": [
      {
        "id": "confidence",
        "label": "Confidence Level",
        "type": "select",
        "defaultValue": "95",
        "placeholder": "",
        "options": [
          {
            "label": "90% (Z = 1.645)",
            "value": "90"
          },
          {
            "label": "95% (Z = 1.960)",
            "value": "95"
          },
          {
            "label": "99% (Z = 2.576)",
            "value": "99"
          }
        ],
        "unit": ""
      },
      {
        "id": "marginOfErrorPct",
        "label": "Margin of Error (%)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.5,
        "max": 20,
        "step": 0.5
      },
      {
        "id": "populationSize",
        "label": "Population Size (leave empty or 0 for infinite)",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      }
    ],
    "formula": "n = (Z² × p(1 - p)) / e²  (with Finite Population Correction when applicable)",
    "keywords": [
      "sample size calculator",
      "survey sample size",
      "margin of error",
      "confidence level"
    ]
  },
  {
    "id": "confidence-interval-calculator",
    "title": "Confidence Interval Calculator",
    "slug": "confidence-interval-calculator",
    "category": "statistics",
    "shortDesc": "Compute lower and upper confidence bounds for sample mean and proportion.",
    "badge": "",
    "fields": [
      {
        "id": "mean",
        "label": "Sample Mean (x̄)",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 0.5
      },
      {
        "id": "stdDev",
        "label": "Standard Deviation (s)",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      },
      {
        "id": "sampleSize",
        "label": "Sample Size (n)",
        "type": "number",
        "defaultValue": 64,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 2,
        "step": 1
      },
      {
        "id": "confLevel",
        "label": "Confidence Level",
        "type": "select",
        "defaultValue": "95",
        "placeholder": "",
        "options": [
          {
            "label": "90% (Z = 1.645)",
            "value": "90"
          },
          {
            "label": "95% (Z = 1.960)",
            "value": "95"
          },
          {
            "label": "99% (Z = 2.576)",
            "value": "99"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "CI = x̄ ± Z × (s / √n)",
    "keywords": [
      "confidence interval",
      "margin of error",
      "standard error",
      "statistics"
    ]
  },
  {
    "id": "mean-calculator",
    "title": "Arithmetic, Geometric & Harmonic Mean Calculator",
    "slug": "mean-calculator",
    "category": "statistics",
    "shortDesc": "Compute arithmetic mean, geometric mean, and harmonic mean of a dataset.",
    "badge": "",
    "fields": [
      {
        "id": "numbers",
        "label": "Numbers (comma separated)",
        "type": "text",
        "defaultValue": "4, 8, 16, 32",
        "placeholder": "4, 8, 16, 32",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "AM = Σx / n  |  GM = (x₁ · x₂ · ... · xₙ)^(1/n)  |  HM = n / Σ(1/x)",
    "keywords": [
      "geometric mean",
      "harmonic mean",
      "pythagorean means",
      "mean calculator"
    ]
  },
  {
    "id": "variance-calculator",
    "title": "Variance Calculator",
    "slug": "variance-calculator",
    "category": "statistics",
    "shortDesc": "Compute sample and population variance with step-by-step deviations.",
    "badge": "",
    "fields": [
      {
        "id": "dataset",
        "label": "Dataset (comma separated)",
        "type": "text",
        "defaultValue": "3, 5, 8, 12, 17",
        "placeholder": "3, 5, 8, 12, 17",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "s² = Σ(x - x̄)² / (n - 1)",
    "keywords": [
      "variance calculator",
      "sample variance",
      "population variance"
    ]
  },
  {
    "id": "range-calculator",
    "title": "Range & Interquartile Range (IQR) Calculator",
    "slug": "range-calculator",
    "category": "statistics",
    "shortDesc": "Compute minimum, maximum, statistical range, quartiles (Q1, Q3), and IQR.",
    "badge": "",
    "fields": [
      {
        "id": "dataset",
        "label": "Dataset",
        "type": "text",
        "defaultValue": "4, 17, 7, 14, 18, 12, 3, 16, 10, 4, 4, 12",
        "placeholder": "4, 17, 7, 14, 18",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Range = Max - Min  |  IQR = Q3 - Q1",
    "keywords": [
      "range calculator",
      "interquartile range",
      "iqr",
      "quartiles"
    ]
  },
  {
    "id": "ip-subnet-calculator",
    "title": "IPv4 Subnet Calculator",
    "slug": "ip-subnet-calculator",
    "category": "data-computer",
    "shortDesc": "Compute network address, broadcast address, netmask, wildcard, and usable host range from IP and CIDR.",
    "badge": "popular",
    "fields": [
      {
        "id": "ip",
        "label": "IPv4 Address",
        "type": "text",
        "defaultValue": "192.168.1.100",
        "placeholder": "192.168.1.100",
        "options": [],
        "unit": ""
      },
      {
        "id": "cidr",
        "label": "CIDR Prefix (/xx)",
        "type": "number",
        "defaultValue": 24,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 32,
        "step": 1
      }
    ],
    "formula": "Network = IP AND Subnet_Mask  |  Broadcast = Network OR Wildcard_Mask",
    "keywords": [
      "ip subnet calculator",
      "cidr calculator",
      "subnet mask",
      "network address",
      "broadcast ip"
    ]
  },
  {
    "id": "download-time-calculator",
    "title": "Download & Upload Time Calculator",
    "slug": "download-time-calculator",
    "category": "data-computer",
    "shortDesc": "Calculate file transfer time based on file size and internet connection speed.",
    "badge": "popular",
    "fields": [
      {
        "id": "fileSizeGB",
        "label": "File Size (GB)",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.01,
        "step": 1
      },
      {
        "id": "speedMbps",
        "label": "Internet Speed (Mbps)",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 10
      }
    ],
    "formula": "Time (s) = (File Size in Bytes × 8) / (Speed in bps) × 1.10 (overhead)",
    "keywords": [
      "download time calculator",
      "file transfer speed",
      "bandwidth time",
      "mbps to download time"
    ]
  },
  {
    "id": "binary-calculator",
    "title": "Binary Math Calculator",
    "slug": "binary-calculator",
    "category": "data-computer",
    "shortDesc": "Perform binary arithmetic (Add, Subtract, Multiply, Divide) and bitwise logic (AND, OR, XOR).",
    "badge": "",
    "fields": [
      {
        "id": "bin1",
        "label": "First Binary Number",
        "type": "text",
        "defaultValue": "1101",
        "placeholder": "e.g. 1101",
        "options": [],
        "unit": ""
      },
      {
        "id": "op",
        "label": "Operation",
        "type": "select",
        "defaultValue": "+",
        "placeholder": "",
        "options": [
          {
            "label": "Add (+)",
            "value": "+"
          },
          {
            "label": "Subtract (-)",
            "value": "-"
          },
          {
            "label": "Multiply (×)",
            "value": "*"
          },
          {
            "label": "Divide (÷)",
            "value": "/"
          },
          {
            "label": "Bitwise AND (&)",
            "value": "&"
          },
          {
            "label": "Bitwise OR (|)",
            "value": "|"
          },
          {
            "label": "Bitwise XOR (^)",
            "value": "^"
          }
        ],
        "unit": ""
      },
      {
        "id": "bin2",
        "label": "Second Binary Number",
        "type": "text",
        "defaultValue": "1010",
        "placeholder": "e.g. 1010",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Binary operations evaluated via Boolean logic and base-2 arithmetic",
    "keywords": [
      "binary calculator",
      "binary addition",
      "binary bitwise",
      "base 2 math"
    ]
  },
  {
    "id": "decimal-to-binary",
    "title": "Decimal to Binary Converter",
    "slug": "decimal-to-binary",
    "category": "data-computer",
    "shortDesc": "Convert base-10 decimal integers to base-2 binary with step-by-step division.",
    "badge": "",
    "fields": [
      {
        "id": "decimal",
        "label": "Decimal Integer",
        "type": "number",
        "defaultValue": 156,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      }
    ],
    "formula": "Repeated division by 2 recording remainders from bottom to top",
    "keywords": [
      "decimal to binary",
      "base 10 to base 2",
      "convert to binary"
    ]
  },
  {
    "id": "binary-to-decimal",
    "title": "Binary to Decimal Converter",
    "slug": "binary-to-decimal",
    "category": "data-computer",
    "shortDesc": "Convert binary strings into decimal with powers of 2 expansion.",
    "badge": "",
    "fields": [
      {
        "id": "binary",
        "label": "Binary String (0s and 1s)",
        "type": "text",
        "defaultValue": "10011100",
        "placeholder": "10011100",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Decimal = Sum(d_i × 2^i)",
    "keywords": [
      "binary to decimal",
      "base 2 to base 10",
      "binary converter"
    ]
  },
  {
    "id": "hexadecimal-converter",
    "title": "Hexadecimal Converter",
    "slug": "hexadecimal-converter",
    "category": "data-computer",
    "shortDesc": "Convert between Hexadecimal (0-9, A-F), Decimal, Binary, and ASCII.",
    "badge": "",
    "fields": [
      {
        "id": "hex",
        "label": "Hexadecimal Value",
        "type": "text",
        "defaultValue": "FF45",
        "placeholder": "e.g. FF45",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Hex (Base 16): 0-9 and A=10, B=11, C=12, D=13, E=14, F=15",
    "keywords": [
      "hex converter",
      "hexadecimal to decimal",
      "hex to binary",
      "base 16"
    ]
  },
  {
    "id": "octal-converter",
    "title": "Octal Converter (Base 8)",
    "slug": "octal-converter",
    "category": "data-computer",
    "shortDesc": "Convert between Octal (0-7), Decimal, Binary, and Hexadecimal.",
    "badge": "",
    "fields": [
      {
        "id": "octal",
        "label": "Octal String (digits 0-7)",
        "type": "text",
        "defaultValue": "755",
        "placeholder": "755",
        "options": [],
        "unit": ""
      }
    ],
    "formula": "Octal = Base 8 using digits 0 through 7",
    "keywords": [
      "octal converter",
      "base 8",
      "chmod permissions",
      "octal to decimal"
    ]
  },
  {
    "id": "base-converter",
    "title": "Arbitrary Base Converter (Base 2 to 36)",
    "slug": "base-converter",
    "category": "data-computer",
    "shortDesc": "Convert numbers between any radix base from 2 to 36.",
    "badge": "",
    "fields": [
      {
        "id": "num",
        "label": "Number String",
        "type": "text",
        "defaultValue": "10110",
        "placeholder": "10110",
        "options": [],
        "unit": ""
      },
      {
        "id": "fromBase",
        "label": "From Base (2 to 36)",
        "type": "number",
        "defaultValue": 2,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 2,
        "max": 36,
        "step": 1
      },
      {
        "id": "toBase",
        "label": "To Base (2 to 36)",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 2,
        "max": 36,
        "step": 1
      }
    ],
    "formula": "Number_target = (Number_source)_dec converted to Base_target",
    "keywords": [
      "base converter",
      "radix converter",
      "base 2 to 36",
      "number system"
    ]
  },
  {
    "id": "bandwidth-calculator",
    "title": "Bandwidth & Data Rate Calculator",
    "slug": "bandwidth-calculator",
    "category": "data-computer",
    "shortDesc": "Convert data transfer bandwidth across bps, Kbps, Mbps, Gbps, and MB/s.",
    "badge": "",
    "fields": [
      {
        "id": "speed",
        "label": "Bandwidth Value",
        "type": "number",
        "defaultValue": 100,
        "placeholder": "",
        "options": [],
        "unit": "",
        "step": 5
      },
      {
        "id": "unit",
        "label": "Bandwidth Unit",
        "type": "select",
        "defaultValue": "mbps",
        "placeholder": "",
        "options": [
          {
            "label": "Mbps (Megabits per second)",
            "value": "mbps"
          },
          {
            "label": "MB/s (Megabytes per second)",
            "value": "mbs"
          },
          {
            "label": "Gbps (Gigabits per second)",
            "value": "gbps"
          },
          {
            "label": "Kbps (Kilobits per second)",
            "value": "kbps"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "MB/s = Mbps / 8  |  Data per hour (GB) = (MB/s × 3600) / 1024",
    "keywords": [
      "bandwidth calculator",
      "mbps to mb s",
      "internet speed conversion",
      "data rate"
    ]
  },
  {
    "id": "storage-calculator",
    "title": "Storage & Usable RAID Capacity Calculator",
    "slug": "storage-calculator",
    "category": "data-computer",
    "shortDesc": "Compute usable disk capacity and fault tolerance for RAID 0, RAID 1, RAID 5, and RAID 10.",
    "badge": "",
    "fields": [
      {
        "id": "driveSizeTB",
        "label": "Single Drive Capacity (TB)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.5,
        "step": 0.5
      },
      {
        "id": "numDrives",
        "label": "Number of Drives",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 2,
        "max": 24,
        "step": 1
      },
      {
        "id": "raidLevel",
        "label": "RAID Configuration",
        "type": "select",
        "defaultValue": "raid5",
        "placeholder": "",
        "options": [
          {
            "label": "RAID 0 (Striping - No Redundancy)",
            "value": "raid0"
          },
          {
            "label": "RAID 1 (Mirroring - 1 Drive Fault Tolerance)",
            "value": "raid1"
          },
          {
            "label": "RAID 5 (Single Parity - 1 Drive Fault Tolerance)",
            "value": "raid5"
          },
          {
            "label": "RAID 10 (Striped Mirrors - 50% Storage)",
            "value": "raid10"
          }
        ],
        "unit": ""
      }
    ],
    "formula": "RAID 5 Usable = (N - 1) × Drive Size  |  RAID 10 Usable = (N / 2) × Drive Size",
    "keywords": [
      "raid calculator",
      "usable storage",
      "raid 5 capacity",
      "raid 10 calculator",
      "nas storage"
    ]
  },
  {
    "id": "pomodoro-timer",
    "title": "Pomodoro Productivity Timer",
    "slug": "pomodoro-timer",
    "category": "time-productivity",
    "shortDesc": "Interactive 25-minute focus intervals with 5-minute short breaks and 15-minute long breaks.",
    "badge": "popular",
    "fields": [
      {
        "id": "workMins",
        "label": "Focus Work Duration (Minutes)",
        "type": "number",
        "defaultValue": 25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 90,
        "step": 5
      },
      {
        "id": "shortBreakMins",
        "label": "Short Break Duration (Minutes)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 30,
        "step": 1
      },
      {
        "id": "longBreakMins",
        "label": "Long Break Duration (Minutes)",
        "type": "number",
        "defaultValue": 15,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "max": 60,
        "step": 5
      },
      {
        "id": "sessionsBeforeLong",
        "label": "Sessions before Long Break",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 2,
        "max": 10,
        "step": 1
      }
    ],
    "formula": "Cycle = (Work × Sessions) + (Short Break × (Sessions - 1)) + Long Break",
    "keywords": [
      "pomodoro timer",
      "focus timer",
      "productivity technique",
      "study timer"
    ]
  },
  {
    "id": "stopwatch",
    "title": "Precision Stopwatch & Lap Timer",
    "slug": "stopwatch",
    "category": "time-productivity",
    "shortDesc": "Digital precision stopwatch with millisecond accuracy, lap splits, and reset controls.",
    "badge": "popular",
    "fields": [
      {
        "id": "targetLaps",
        "label": "Expected Total Laps",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 100,
        "step": 1
      }
    ],
    "formula": "Elapsed Time = Current Timestamp - Start Timestamp",
    "keywords": [
      "stopwatch",
      "lap timer",
      "digital stopwatch",
      "athletic timer"
    ]
  },
  {
    "id": "countdown-timer",
    "title": "Interactive Countdown Timer",
    "slug": "countdown-timer",
    "category": "time-productivity",
    "shortDesc": "Customizable countdown timer with progress ring and audible completion alert.",
    "badge": "",
    "fields": [
      {
        "id": "minutes",
        "label": "Minutes",
        "type": "number",
        "defaultValue": 10,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 180,
        "step": 1
      },
      {
        "id": "seconds",
        "label": "Seconds",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 59,
        "step": 5
      }
    ],
    "formula": "Remaining = Set Duration - Elapsed Seconds",
    "keywords": [
      "countdown timer",
      "timer online",
      "minute timer",
      "alarm timer"
    ]
  },
  {
    "id": "work-hours-calculator",
    "title": "Timesheet Work Hours Calculator",
    "slug": "work-hours-calculator",
    "category": "time-productivity",
    "shortDesc": "Compute total daily and weekly billable hours deducting lunch breaks.",
    "badge": "",
    "fields": [
      {
        "id": "start",
        "label": "Start Time (e.g. 08:30)",
        "type": "text",
        "defaultValue": "08:30",
        "placeholder": "08:30",
        "options": [],
        "unit": ""
      },
      {
        "id": "end",
        "label": "End Time (e.g. 17:00)",
        "type": "text",
        "defaultValue": "17:00",
        "placeholder": "17:00",
        "options": [],
        "unit": ""
      },
      {
        "id": "lunchMins",
        "label": "Unpaid Lunch Break (Minutes)",
        "type": "number",
        "defaultValue": 45,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 120,
        "step": 15
      },
      {
        "id": "daysPerWeek",
        "label": "Work Days per Week",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "max": 7,
        "step": 1
      }
    ],
    "formula": "Daily Hours = (End Time - Start Time - Lunch Minutes) / 60",
    "keywords": [
      "work hours calculator",
      "timesheet calculator",
      "shift hours",
      "punch card calculator"
    ]
  },
  {
    "id": "overtime-calculator",
    "title": "Overtime Pay Calculator",
    "slug": "overtime-calculator",
    "category": "time-productivity",
    "shortDesc": "Compute regular, 1.5x time-and-a-half, and double-time overtime earnings.",
    "badge": "popular",
    "fields": [
      {
        "id": "baseRate",
        "label": "Base Hourly Rate ($/hr)",
        "type": "number",
        "defaultValue": 25,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "step": 0.5
      },
      {
        "id": "totalHours",
        "label": "Total Hours Worked this Week",
        "type": "number",
        "defaultValue": 48,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1
      },
      {
        "id": "threshold",
        "label": "Overtime Threshold (Standard 40 hrs)",
        "type": "number",
        "defaultValue": 40,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 30,
        "max": 50,
        "step": 1
      }
    ],
    "formula": "Gross Pay = (Reg Hours × Rate) + (OT Hours × Rate × 1.5)",
    "keywords": [
      "overtime calculator",
      "time and a half",
      "overtime pay",
      "weekly wage"
    ]
  },
  {
    "id": "productivity-calculator",
    "title": "Productivity & Efficiency Ratio Calculator",
    "slug": "productivity-calculator",
    "category": "time-productivity",
    "shortDesc": "Measure labor productivity (Units produced per labor hour) and team efficiency.",
    "badge": "",
    "fields": [
      {
        "id": "outputUnits",
        "label": "Units or Output Produced",
        "type": "number",
        "defaultValue": 350,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 10
      },
      {
        "id": "laborHours",
        "label": "Total Labor Hours Input",
        "type": "number",
        "defaultValue": 50,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 5
      },
      {
        "id": "standardTarget",
        "label": "Standard Target (Units/Hour)",
        "type": "number",
        "defaultValue": 6,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      }
    ],
    "formula": "Productivity = Total Output / Total Labor Hours  |  Efficiency = (Actual / Target) × 100%",
    "keywords": [
      "productivity calculator",
      "labor efficiency",
      "output per hour",
      "operations KPI"
    ]
  },
  {
    "id": "time-tracking-calculator",
    "title": "Freelance Billable Time Calculator",
    "slug": "time-tracking-calculator",
    "category": "time-productivity",
    "shortDesc": "Compute total invoice amount from project task hours and client hourly billing rates.",
    "badge": "",
    "fields": [
      {
        "id": "hours",
        "label": "Billable Hours Logged",
        "type": "number",
        "defaultValue": 37.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      },
      {
        "id": "hourlyRate",
        "label": "Billing Hourly Rate ($/hr)",
        "type": "number",
        "defaultValue": 85,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 5,
        "step": 5
      },
      {
        "id": "discountPct",
        "label": "Client Discount (%) (optional)",
        "type": "number",
        "defaultValue": 0,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 50,
        "step": 5
      }
    ],
    "formula": "Invoice = (Hours × Hourly Rate) × (1 - Discount)",
    "keywords": [
      "freelance calculator",
      "billable hours",
      "invoice calculator",
      "hourly billing"
    ]
  },
  {
    "id": "business-profit-calculator",
    "title": "Business Profit & EBITDA Calculator",
    "slug": "business-profit-calculator",
    "category": "business",
    "shortDesc": "Compute Gross Profit, Operating Income, and Net Profit Margin from P&L revenues and expenses.",
    "badge": "popular",
    "fields": [
      {
        "id": "revenue",
        "label": "Total Sales Revenue ($)",
        "type": "number",
        "defaultValue": 250000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 5000
      },
      {
        "id": "cogs",
        "label": "Cost of Goods Sold (COGS) ($)",
        "type": "number",
        "defaultValue": 100000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 5000
      },
      {
        "id": "operatingExpenses",
        "label": "Operating Expenses (OPEX) ($)",
        "type": "number",
        "defaultValue": 65000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 2500
      },
      {
        "id": "taxesAndInterest",
        "label": "Taxes & Interest ($)",
        "type": "number",
        "defaultValue": 18000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      }
    ],
    "formula": "Net Profit = Revenue - COGS - OPEX - Taxes & Interest",
    "keywords": [
      "business profit calculator",
      "p&l calculator",
      "gross margin",
      "operating income",
      "net profit"
    ]
  },
  {
    "id": "roas-calculator",
    "title": "ROAS Calculator (Return on Ad Spend)",
    "slug": "roas-calculator",
    "category": "business",
    "shortDesc": "Calculate Return on Ad Spend (ROAS) ratio, percentage return, and ad campaign profit.",
    "badge": "popular",
    "fields": [
      {
        "id": "adSpend",
        "label": "Total Advertising Spend ($)",
        "type": "number",
        "defaultValue": 5000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 250
      },
      {
        "id": "adRevenue",
        "label": "Revenue Generated from Ads ($)",
        "type": "number",
        "defaultValue": 22500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      }
    ],
    "formula": "ROAS = Revenue from Advertising / Advertising Spend",
    "keywords": [
      "roas calculator",
      "return on ad spend",
      "ppc roi",
      "meta ads roas",
      "google ads roas"
    ]
  },
  {
    "id": "employee-cost-calculator",
    "title": "True Cost of an Employee Calculator",
    "slug": "employee-cost-calculator",
    "category": "business",
    "shortDesc": "Compute the full burden cost of an employee including taxes, benefits, bonuses, and equipment.",
    "badge": "popular",
    "fields": [
      {
        "id": "baseSalary",
        "label": "Base Annual Salary ($)",
        "type": "number",
        "defaultValue": 75000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1000,
        "step": 1000
      },
      {
        "id": "healthInsurance",
        "label": "Annual Health Insurance ($)",
        "type": "number",
        "defaultValue": 7200,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 200
      },
      {
        "id": "retirementMatch",
        "label": "401(k) / Pension Match (%)",
        "type": "number",
        "defaultValue": 4,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 15,
        "step": 0.5
      },
      {
        "id": "payrollTaxesPct",
        "label": "Employer Payroll Taxes (FICA, FUTA, SUTA) (%)",
        "type": "number",
        "defaultValue": 8.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "max": 20,
        "step": 0.5
      },
      {
        "id": "equipmentSoftware",
        "label": "Hardware, Software & Overhead ($/yr)",
        "type": "number",
        "defaultValue": 4500,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 500
      }
    ],
    "formula": "Total Cost = Base Salary + Health + Retirement Match + Payroll Taxes + Overhead",
    "keywords": [
      "employee cost calculator",
      "true cost of employee",
      "labor burden rate",
      "hiring cost calculator"
    ]
  },
  {
    "id": "business-revenue-calculator",
    "title": "SaaS & Recurring Revenue Calculator (MRR / ARR)",
    "slug": "business-revenue-calculator",
    "category": "business",
    "shortDesc": "Compute Monthly Recurring Revenue (MRR), Annual Recurring Revenue (ARR), and Churn impact.",
    "badge": "",
    "fields": [
      {
        "id": "customers",
        "label": "Active Paying Customers",
        "type": "number",
        "defaultValue": 450,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 10
      },
      {
        "id": "arpu",
        "label": "Average Revenue per User ($ / month)",
        "type": "number",
        "defaultValue": 79,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 5
      },
      {
        "id": "growthRatePct",
        "label": "Monthly Growth Rate (%)",
        "type": "number",
        "defaultValue": 5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": -20,
        "max": 100,
        "step": 0.5
      }
    ],
    "formula": "MRR = Active Customers × ARPU  |  ARR = MRR × 12",
    "keywords": [
      "mrr calculator",
      "arr calculator",
      "saas revenue",
      "subscription business metrics"
    ]
  },
  {
    "id": "cost-calculator",
    "title": "Total & Unit Production Cost Calculator",
    "slug": "cost-calculator",
    "category": "business",
    "shortDesc": "Compute total production cost and average cost per unit across volume scales.",
    "badge": "",
    "fields": [
      {
        "id": "fixedCosts",
        "label": "Total Fixed Costs ($)",
        "type": "number",
        "defaultValue": 25000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0,
        "step": 1000
      },
      {
        "id": "variablePerUnit",
        "label": "Variable Cost per Unit ($)",
        "type": "number",
        "defaultValue": 18.5,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 0.1,
        "step": 0.5
      },
      {
        "id": "quantity",
        "label": "Production Volume (Units)",
        "type": "number",
        "defaultValue": 5000,
        "placeholder": "",
        "options": [],
        "unit": "",
        "min": 1,
        "step": 100
      }
    ],
    "formula": "Total Cost = Fixed Costs + (Variable Cost/Unit × Quantity)  |  Unit Cost = Total / Q",
    "keywords": [
      "cost calculator",
      "unit cost",
      "production cost",
      "economies of scale"
    ]
  }
];

if (typeof window !== 'undefined') {
  window.ALL_CALCULATORS_DATA = ALL_CALCULATORS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ALL_CALCULATORS_DATA;
}
