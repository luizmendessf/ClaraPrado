#!/bin/bash
# Find the line with Publications</Link> and add Curriculum link after it
sed -i '' '/Publications<\/Link>/a\
              <Link href="\/curriculum" className={`transition-all duration-300 font-medium ${\
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"\
              }`}>\
                Curriculum\
              <\/Link>' app/page.tsx
