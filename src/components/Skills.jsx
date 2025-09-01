import { useState, useEffect, useRef } from "react";

const Skills = ({ isVisible }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techStack = [
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
      name: "MongoDB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 128 128"
        >
          <path
            fill="#439934"
            fill-rule="evenodd"
            d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618"
            clip-rule="evenodd"
          />
          <path
            fill="#45a538"
            fill-rule="evenodd"
            d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702q2.638 7.77 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866z"
            clip-rule="evenodd"
          />
          <path
            fill="#46a037"
            fill-rule="evenodd"
            d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433"
            clip-rule="evenodd"
          />
          <path
            fill="#409433"
            fill-rule="evenodd"
            d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49 49 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.4 41.4 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946"
            clip-rule="evenodd"
          />
          <path
            fill="#4faa41"
            fill-rule="evenodd"
            d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4499 4499 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6168 6168 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78z"
            clip-rule="evenodd"
          />
          <path
            fill="#4aa73c"
            fill-rule="evenodd"
            d="M43.155 32.227c.21.274.511.516.617.826a4499 4499 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3889 3889 0 0 0-5.242-15.551c-.089-.263-.34-.469-.516-.702z"
            clip-rule="evenodd"
          />
          <path
            fill="#57ae47"
            fill-rule="evenodd"
            d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6168 6168 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769q2.52 7.382 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045q.087 12.124.171 24.251"
            clip-rule="evenodd"
          />
          <path
            fill="#60b24f"
            fill-rule="evenodd"
            d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813q-2.483-7.395-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577"
            clip-rule="evenodd"
          />
          <path
            fill="#a9aa88"
            fill-rule="evenodd"
            d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.4 41.4 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566z"
            clip-rule="evenodd"
          />
          <path
            fill="#b6b598"
            fill-rule="evenodd"
            d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722z"
            clip-rule="evenodd"
          />
          <path
            fill="#c2c1a7"
            fill-rule="evenodd"
            d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812q-.164-2.079-.331-4.158"
            clip-rule="evenodd"
          />
          <path
            fill="#cecdb7"
            fill-rule="evenodd"
            d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533"
            clip-rule="evenodd"
          />
          <path
            fill="#dbdac7"
            fill-rule="evenodd"
            d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124z"
            clip-rule="evenodd"
          />
          <path
            fill="#ebe9dc"
            fill-rule="evenodd"
            d="m65.38 124.415l1.218-3.124l.251 3.696z"
            clip-rule="evenodd"
          />
          <path
            fill="#cecdb7"
            fill-rule="evenodd"
            d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23z"
            clip-rule="evenodd"
          />
          <path
            fill="#4faa41"
            fill-rule="evenodd"
            d="m64.316 95.172l-.066-.011l-.066.01l.155-.559z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      color: "from-green-400 to-green-600",
    },
    {
      name: "Express.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 128 128"
        >
          <path
            fill="#fff"
            d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"
          />
        </svg>
      ),
      color: "from-gray-100 to-gray-400",
    },
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
      name: "TailwindCSS",
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
      name: "Bootstrap",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 128 128"
        >
          <defs>
            <linearGradient
              id="SVGDcOHx6lE"
              x1="76.079"
              x2="523.48"
              y1="10.798"
              y2="365.95"
              gradientTransform="translate(1.11 14.613)scale(.24566)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#9013fe" />
              <stop offset="1" stop-color="#6610f2" />
            </linearGradient>
            <linearGradient
              id="SVG82YRicnt"
              x1="193.51"
              x2="293.51"
              y1="109.74"
              y2="278.87"
              gradientTransform="translate(0 52)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fff" />
              <stop offset="1" stop-color="#f1e5fc" />
            </linearGradient>
            <filter
              id="SVGhDuRKelW"
              width="197"
              height="249"
              x="161.9"
              y="135.46"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="8" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
          <path
            fill="url(#SVGDcOHx6lE)"
            d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"
          />
          <path
            fill="url(#SVG82YRicnt)"
            d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
            filter="url(#SVGhDuRKelW)"
            transform="translate(1.494 2.203)scale(.24566)"
          />
        </svg>
      ),
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Shadcn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 32 32"
        >
          <path
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="4.48"
            d="m27.76 16.56l-11.2 11.2m8.96-23.52L4.24 25.52"
          />
        </svg>
      ),
      color: "from-purple-500 to-indigo-600",
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
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                TECH STACK
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-4"></div>
          </div>

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
                  <div className="relative preserve-3d transition-transform duration-700 hover:rotate-y-180">
                    <div className="relative w-28 h-28 mx-auto backface-hidden">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 p-[2px]">
                        <div className="w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-lg" />
                      </div>
                      <div
                        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                      />

                      <div className="relative w-full h-full flex flex-col items-center justify-center rounded-lg border border-gray-700/50 hover:border-gray-500/50 transition-all duration-500">
                        <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-500">
                          {tech.icon}
                        </div>
                        <div className="text-xs font-mono text-gray-400 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {tech.name}
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
                      </div>
                    </div>

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
