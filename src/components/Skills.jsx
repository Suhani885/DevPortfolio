import React, { useState, useEffect, useRef } from "react";

const Skills = ({ isVisible }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techStack = [
    {
      name: "React.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 128 128"
        >
          <g fill="#61dafb">
            <circle cx="64" cy="64" r="11.4" />
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4" />
          </g>
        </svg>
      ),
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "TypeScript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
        >
          <rect width="28" height="28" x="2" y="2" fill="#3178c6" rx="1.312" />
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M18.245 23.759v3.068a6.5 6.5 0 0 0 1.764.575a11.6 11.6 0 0 0 2.146.192a10 10 0 0 0 2.088-.211a5.1 5.1 0 0 0 1.735-.7a3.54 3.54 0 0 0 1.181-1.266a4.47 4.47 0 0 0 .186-3.394a3.4 3.4 0 0 0-.717-1.117a5.2 5.2 0 0 0-1.123-.877a12 12 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.1 2.1 0 0 1-.516-.518a1.1 1.1 0 0 1-.181-.618a1.04 1.04 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.4 2.4 0 0 1 .726-.283a4.2 4.2 0 0 1 .956-.1a6 6 0 0 1 .808.058a6 6 0 0 1 .856.177a6 6 0 0 1 .836.3a4.7 4.7 0 0 1 .751.422V13.9a7.5 7.5 0 0 0-1.525-.4a12.4 12.4 0 0 0-1.9-.129a8.8 8.8 0 0 0-2.064.235a5.2 5.2 0 0 0-1.716.733a3.66 3.66 0 0 0-1.171 1.271a3.73 3.73 0 0 0-.431 1.845a3.6 3.6 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.5 6.5 0 0 1 .942.517a2.5 2.5 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.3 1.3 0 0 1-.435.441a2.4 2.4 0 0 1-.726.292a4.4 4.4 0 0 1-1.018.105a5.8 5.8 0 0 1-1.969-.35a5.9 5.9 0 0 1-1.805-1.045m-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"
          />
        </svg>
      ),
      color: "from-blue-400 to-indigo-600",
    },
    {
      name: "Javascript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 256 256"
        >
          <path fill="#f7df1e" d="M0 0h256v256H0z" />
          <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
        </svg>
      ),
      color: "from-gray-100 to-gray-400",
    },
    {
      name: "Tailwind",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 128 128"
        >
          <path
            fill="#38bdf8"
            d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
          />
        </svg>
      ),
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "Next.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 128 128"
        >
          <circle cx="64" cy="64" r="64" />
          <path
            fill="url(#deviconNextjs0)"
            d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"
          />
          <path
            fill="url(#deviconNextjs1)"
            d="M81.778 38.4h8.533v51.2h-8.533z"
          />
          <defs>
            <linearGradient
              id="deviconNextjs0"
              x1="109"
              x2="144.5"
              y1="116.5"
              y2="160.5"
              gradientTransform="scale(.71111)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="deviconNextjs1"
              x1="121"
              x2="120.799"
              y1="54"
              y2="106.875"
              gradientTransform="scale(.71111)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "Node.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52.61"
          height="60"
          viewBox="0 0 256 292"
        >
          <defs>
            <linearGradient
              id="logosNodejsIconAlt0"
              x1="68.188%"
              x2="27.823%"
              y1="17.487%"
              y2="89.755%"
            >
              <stop offset="0%" stop-color="#41873f" />
              <stop offset="32.88%" stop-color="#418b3d" />
              <stop offset="63.52%" stop-color="#419637" />
              <stop offset="93.19%" stop-color="#3fa92d" />
              <stop offset="100%" stop-color="#3fae2a" />
            </linearGradient>
            <linearGradient
              id="logosNodejsIconAlt1"
              x1="43.277%"
              x2="159.245%"
              y1="55.169%"
              y2="-18.306%"
            >
              <stop offset="13.76%" stop-color="#41873f" />
              <stop offset="40.32%" stop-color="#54a044" />
              <stop offset="71.36%" stop-color="#66b848" />
              <stop offset="90.81%" stop-color="#6cc04a" />
            </linearGradient>
            <linearGradient
              id="logosNodejsIconAlt2"
              x1="-4.389%"
              x2="101.499%"
              y1="49.997%"
              y2="49.997%"
            >
              <stop offset="9.192%" stop-color="#6cc04a" />
              <stop offset="28.64%" stop-color="#66b848" />
              <stop offset="59.68%" stop-color="#54a044" />
              <stop offset="86.24%" stop-color="#41873f" />
            </linearGradient>
            <path
              id="logosNodejsIconAlt3"
              d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z"
            />
          </defs>
          <path
            fill="url(#logosNodejsIconAlt0)"
            d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z"
          />
          <mask id="logosNodejsIconAlt4" fill="#fff">
            <use href="#logosNodejsIconAlt3" />
          </mask>
          <path
            fill="url(#logosNodejsIconAlt1)"
            d="M249.485 67.8L134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714"
            mask="url(#logosNodejsIconAlt4)"
          />
          <mask id="logosNodejsIconAlt5" fill="#fff">
            <use href="#logosNodejsIconAlt3" />
          </mask>
          <path
            fill="url(#logosNodejsIconAlt2)"
            d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63z"
            mask="url(#logosNodejsIconAlt5)"
          />
        </svg>
      ),
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "MySQL",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 128 128"
        >
          <path
            fill="#00618a"
            d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379c-1.293.547-3.355.559-3.566 2.18c.711.746.82 1.859 1.387 2.777c1.086 1.754 2.922 4.113 4.559 5.352c1.789 1.348 3.633 2.793 5.551 3.961c3.414 2.082 7.223 3.27 10.504 5.352c1.938 1.23 3.859 2.777 5.75 4.164c.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719c-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391c2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152c-4.441-3.781-9.285-7.555-14.273-10.703c-2.766-1.746-6.184-2.883-9.117-4.363c-.988-.496-2.719-.758-3.371-1.586c-1.539-1.961-2.379-4.449-3.566-6.738c-2.488-4.793-4.93-10.023-7.137-15.066c-1.504-3.437-2.484-6.828-4.359-9.91c-9-14.797-18.687-23.73-33.695-32.508c-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672C-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539c.688 1.492.805 2.984 1.391 4.559c1.438 3.883 2.695 8.109 4.559 11.695c.941 1.816 1.98 3.727 3.172 5.352c.727.996 1.98 1.438 2.18 2.973c-1.227 1.715-1.297 4.375-1.984 6.543c-3.098 9.77-1.926 21.91 2.578 29.137c1.383 2.223 4.641 6.98 9.117 5.156c3.918-1.598 3.043-6.539 4.164-10.902c.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699c2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781c-1.551-1.523-3.277-3.414-4.559-5.156c-3.613-4.902-6.805-10.27-9.711-15.855c-1.391-2.668-2.598-5.609-3.77-8.324c-.453-1.047-.445-2.633-1.387-3.172c-1.281 1.988-3.172 3.598-4.164 5.945c-1.582 3.754-1.789 8.336-2.375 13.082c-.348.125-.195.039-.398.199c-2.762-.668-3.73-3.508-4.758-5.949c-2.594-6.164-3.078-16.09-.793-23.191c.59-1.836 3.262-7.617 2.18-9.316c-.516-1.691-2.219-2.672-3.172-3.965c-1.18-1.598-2.355-3.703-3.172-5.551c-2.125-4.805-3.113-10.203-5.352-15.062c-1.07-2.324-2.875-4.676-4.359-6.738c-1.645-2.289-3.484-3.977-4.758-6.742c-.453-.984-1.066-2.559-.398-3.566c.215-.684.516-.969 1.191-1.191c1.148-.887 4.352.297 5.547.793c3.18 1.32 5.832 2.578 8.527 4.363c1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988c4.609 1.402 8.738 3.582 12.488 5.949c11.422 7.215 20.766 17.48 27.156 29.734c1.027 1.973 1.473 3.852 2.379 5.945c1.824 4.219 4.125 8.559 5.941 12.688c1.816 4.113 3.582 8.27 6.148 11.695c1.348 1.801 6.551 2.766 8.918 3.766c1.66.699 4.379 1.43 5.949 2.379c3 1.809 5.906 3.965 8.723 5.945c1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164l.199-.195c1.227-.867 1.789-2.25 1.781-4.363c-.492-.52-.562-1.164-.992-1.785c-.562-.824-1.66-1.289-2.375-1.98zm0 0"
          />
        </svg>
      ),
      color: "from-green-500 to-lime-600",
    },
    {
      name: "Redux",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#764abc" rx="60" />
            <path
              fill="#fff"
              d="M166.579 165.599c7.381-.764 12.98-7.127 12.725-14.762c-.254-7.635-6.617-13.743-14.252-13.743h-.509c-7.89.254-13.998 6.871-13.744 14.761c.255 3.818 1.782 7.126 4.072 9.417c-8.653 17.052-21.887 29.523-41.739 39.958c-13.489 7.126-27.487 9.671-41.485 7.89c-11.453-1.527-20.36-6.618-25.96-15.016c-8.144-12.471-8.907-25.96-2.036-39.449c4.836-9.672 12.471-16.798 17.307-20.361c-1.018-3.308-2.545-8.908-3.309-12.98c-36.903 26.724-33.086 62.864-21.888 79.916c8.4 12.725 25.451 20.615 44.285 20.615c5.09 0 10.18-.509 15.27-1.782c32.578-6.362 57.265-25.705 71.263-54.464"
            />
            <path
              fill="#fff"
              d="M211.372 134.04c-19.342-22.652-47.847-35.122-80.424-35.122h-4.072c-2.291-4.582-7.127-7.636-12.471-7.636h-.509c-7.89.255-13.998 6.872-13.744 14.762c.255 7.635 6.617 13.743 14.253 13.743h.509c5.599-.254 10.435-3.817 12.471-8.653h4.581c19.342 0 37.667 5.599 54.21 16.543c12.725 8.399 21.888 19.343 26.978 32.577c4.327 10.689 4.072 21.124-.509 30.032c-7.126 13.489-19.088 20.87-34.868 20.87c-10.18 0-19.851-3.054-24.942-5.345c-2.799 2.545-7.889 6.617-11.452 9.162c10.943 5.09 22.142 7.89 32.831 7.89c24.433 0 42.503-13.489 49.375-26.978c7.381-14.761 6.872-40.212-12.217-61.845"
            />
            <path
              fill="#fff"
              d="M82.082 169.926c.255 7.635 6.617 13.743 14.253 13.743h.509c7.889-.255 13.998-6.872 13.743-14.762c-.254-7.635-6.617-13.743-14.252-13.743h-.51c-.508 0-1.272 0-1.78.255c-10.436-17.307-14.762-36.141-13.235-56.501c1.018-15.27 6.108-28.505 15.016-39.45c7.38-9.416 21.633-13.997 31.304-14.252c26.978-.509 38.431 33.086 39.194 46.576c3.309.763 8.908 2.544 12.726 3.817C175.996 54.38 150.545 33 126.112 33c-22.906 0-44.03 16.543-52.429 40.976c-11.707 32.577-4.072 63.881 10.18 88.569c-1.272 1.781-2.035 4.581-1.78 7.381"
            />
          </g>
        </svg>
      ),
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Angular.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 128 128"
        >
          <path
            fill="#b3b3b3"
            d="M63.81 1.026L4.553 21.88l9.363 77.637l49.957 27.457l50.214-27.828l9.36-77.635z"
          />
          <path
            fill="#a6120d"
            d="M117.536 25.998L63.672 7.629v112.785l45.141-24.983z"
          />
          <path
            fill="#dd1b16"
            d="m11.201 26.329l8.026 69.434l44.444 24.651V7.627z"
          />
          <path
            fill="#f2f2f2"
            d="m78.499 67.67l-14.827 6.934H48.044l-7.347 18.374l-13.663.254l36.638-81.508zm-1.434-3.491L63.77 37.858L52.864 63.726h10.807z"
          />
          <path
            fill="#b3b3b3"
            d="m63.671 11.724l.098 26.134l12.375 25.888H63.698l-.027 10.841l17.209.017l8.042 18.63l13.074.242z"
          />
        </svg>
      ),
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "HTML",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
        >
          <path
            fill="#e44f26"
            d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"
          />
          <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
          <path
            fill="#ebebeb"
            d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"
          />
          <path
            fill="#fff"
            d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"
          />
        </svg>
      ),
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "CSS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 128 128"
        >
          <path
            fill="#1572b6"
            d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"
          />
          <path
            fill="#33a9dc"
            d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"
          />
          <path
            fill="#fff"
            d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"
          />
          <path
            fill="#ebebeb"
            d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"
          />
          <path
            fill="#fff"
            d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"
          />
          <path
            fill="#ebebeb"
            d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"
          />
        </svg>
      ),
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Python",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
        >
          <defs>
            <linearGradient
              id="vscodeIconsFileTypePython0"
              x1="-133.268"
              x2="-133.198"
              y1="-202.91"
              y2="-202.84"
              gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#387eb8" />
              <stop offset="1" stop-color="#366994" />
            </linearGradient>
            <linearGradient
              id="vscodeIconsFileTypePython1"
              x1="-133.575"
              x2="-133.495"
              y1="-203.203"
              y2="-203.133"
              gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffe052" />
              <stop offset="1" stop-color="#ffc331" />
            </linearGradient>
          </defs>
          <path
            fill="url(#vscodeIconsFileTypePython0)"
            d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"
          />
          <path
            fill="url(#vscodeIconsFileTypePython1)"
            d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214z"
          />
        </svg>
      ),
      color: "from-purple-400 to-pink-500",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-black">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`transform transition-all duration-1500 delay-400 ${
            isVisible?.skills
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          ref={containerRef}
        >
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                TECH STACK
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-4"></div>
          </div>

          {/* 3D Tech Stack Grid */}
          <div className="perspective-1000">
            <div
              className="grid grid-cols-4 md:grid-cols-5 gap-8 transform-gpu"
              style={{
                transform: `rotateX(${mousePosition.y * 10 - 5}deg) rotateY(${
                  mousePosition.x * 10 - 5
                }deg)`,
              }}
            >
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    animation: `techFloat ${
                      3 + index * 0.5
                    }s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* 3D Card Container */}
                  <div className="relative preserve-3d transition-transform duration-700 hover:rotate-y-180">
                    {/* Front Face */}
                    <div className="relative w-28 h-28 mx-auto backface-hidden">
                      {/* Holographic border */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 p-[2px]">
                        <div className="w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-lg" />
                      </div>

                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                      />

                      {/* Content */}
                      <div className="relative w-full h-full flex flex-col items-center justify-center rounded-lg border border-gray-700/50 hover:border-gray-500/50 transition-all duration-500">
                        <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-500">
                          {tech.icon}
                        </div>
                        <div className="text-xs font-mono text-gray-400 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {tech.name}
                        </div>
                      </div>

                      {/* Scan line effect */}
                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-32 h-32 mx-auto backface-hidden rotate-y-180">
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-lg border border-blue-500/50 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">{tech.icon}</div>
                          <div className="text-sm font-mono text-blue-400">
                            {tech.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes techFloat {
          0%,
          100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          50% {
            transform: translateY(-10px) rotateZ(5deg);
          }
        }

        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Skills;
