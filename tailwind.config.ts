import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");



export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			shimmer: "shimmer 2s linear infinite",
			"move-up": "move-up 2s linear forwards",
			"move-down": "move-down 2s linear forwards",

			wiggle: 'wiggle 4s ease-in-out infinite',
		},
		keyframes: {
			"move-up": {
				from: {
					transform:"translateY(10px)",
					opacity: "0",
				},
				to: {
					transform:"translateY(0px)",
					opacity: "1",
				}
			},
			
			"move-down": {
				from: {
					transform:"translateY(-10px)",
					opacity: "0",
				},
				to: {
					transform:"translateY(0px)",
					opacity: "1",
				}
			},

			wiggle: {
				'0%, 100%': { transform: 'scale(110%)' },
				'50%': { transform: 'scale(100%)' },
			},

			shimmer: {
			  from: {
				backgroundPosition: "0 0",
			  },
			  to: {
				backgroundPosition: "-200% 0",
			  },
			},
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	}
	
  },
  plugins: [require("tailwindcss-animate"),  addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
		matchUtilities(
		  {
			"bg-grid": (value: any) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
			  )}")`,
			}),
			"bg-grid-small": (value: any) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
			  )}")`,
			}),
			"bg-dot": (value: any) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
			  )}")`,
			}),
		  },
		  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
		);
	  },
	  function ({addUtilities}: any){
		const newUtilities = {
			".scrollbar-thin" : {
				scrollbarWidth: "thin",
				scrollbarColor: "rgb(31 29 29) black",
			},
			".scrollbar-webKit": {
				"&::-webkit-scrollbar" :{
					width: "8px",
				},
				"&::-webkit-scrollbar-track" :{
					background: "black",
				},
				"&::-webkit-scrollbar-thumb" :{
					background: "rgb(31 41 55)",
					borderRadius: "20px",
					border: "1px solid black",
				}
			},
		}

		addUtilities(newUtilities, ["responsive", "hover"]);
	  },
	  [require("@tailwindcss/typography")],
	],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  };

