import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen py-20 flex-col items-center p-0 m-0 bg-[#f8f8fd] ">
      <div className="group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
        <div className="pb-[200px] pt-4 md:pt-10">
          <div className="relative mx-auto max-w-2xl px-4">
            <div className="group relative mb-4 flex items-start md:-ml-12">
              <div className="bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border shadow-sm">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
                <p className="text-muted-foreground leading-normal">
                  Please{' '}
                  <a className="underline" href="/login">
                    log in
                  </a>{' '}
                  or{' '}
                  <a className="underline" href="/signup">
                    sign up
                  </a>{' '}
                  to save and revisit your chat history!
                </p>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full my-4"
            ></div>
            <div>
              <div className="group relative flex items-start md:-ml-12">
                <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z"></path>
                  </svg>
                </div>
                <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
                  what is the price of Tesla stock now?
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full my-4"
              ></div>
            </div>
            <div>
              <div className="group relative flex items-start md:-ml-12">
                <div className="flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                  >
                    <title>OpenAI icon</title>
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
                  </svg>
                </div>
                <div className="ml-4 flex-1 pl-2">
                  <div className="rounded-xl border bg-zinc-950 p-4 text-green-400">
                    <div className="float-right inline-block rounded-full bg-white/10 px-2 py-1 text-xs">
                      -1.28% ↓
                    </div>
                    <div className="text-lg text-zinc-300">TSLA</div>
                    <div className="text-3xl font-bold">$780</div>
                    <div className="text mt-1 text-xs text-zinc-500">
                      Closed: Feb 27, 4:59 PM EST
                    </div>
                    <div className="relative -mx-4 cursor-col-resize">
                      <svg
                        viewBox="0 0 250.0 168.0"
                        height="150"
                        width="100%"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="fill-id-tsuid_31"
                            x1="0%"
                            x2="0%"
                            y1="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stop-color="#34a853"
                              stop-opacity="0.38"
                            ></stop>
                            <stop
                              offset="13%"
                              stop-color="#e6f4ea"
                              stop-opacity="0"
                            ></stop>
                          </linearGradient>
                          <clipPath id="range-id-tsuid_31">
                            <rect height="100%" width="0" x="0" y="0"></rect>
                          </clipPath>
                          <defs>
                            <linearGradient
                              id="chart-grad-_f1bJZYLUHqWpxc8Prs2meA_33"
                              x1="0%"
                              x2="0%"
                              y1="0%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stop-color="#34a853"
                                stop-opacity="0.38"
                              ></stop>
                              <stop
                                offset="13%"
                                stop-color="#e6f4ea"
                                stop-opacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <clipPath id="mask-_f1bJZYLUHqWpxc8Prs2meA_32">
                            <rect height="218" width="250" x="0" y="-5"></rect>
                          </clipPath>
                        </defs>
                        <path
                          d="M  0 42.86 L 0.89 46.26 L 1.78 44.3 L 2.68 44.24 L 3.57 42 L 4.46 43.42 L 5.35 43.62 L 6.25 47 L 7.14 47.65 L 8.03 47.69 L 8.92 45.55 L 9.82 43.19 L 10.71 43.9 L 11.6 42.83 L 12.49 42.81 L 13.39 46.75 L 14.28 43.06 L 15.17 40.8 L 16.06 39.72 L 16.96 39.77 L 17.85 45.77 L 18.74 44.93 L 19.63 44.35 L 20.53 40.29 L 21.42 42.77 L 22.31 42.12 L 23.2 43.4 L 24.1 47.95 L 24.99 50.15 L 25.88 48.59 L 26.77 42.18 L 27.67 44.1 L 28.56 39.91 L 29.45 44.92 L 30.34 47.62 L 31.24 48.06 L 32.13 47.67 L 33.02 56.47 L 33.91 57.74 L 34.8 65.48 L 35.7 64.47 L 36.59 47.25 L 37.48 58.26 L 38.37 52.04 L 39.27 55.8 L 40.16 92.92 L 41.05 105.2 L 41.94 102 L 42.84 106.14 L 43.73 78.71 L 44.62 104.6 L 45.51 96.58 L 46.41 67.56 L 47.3 69.53 L 48.19 69.99 L 49.08 66.75 L 49.98 69.72 L 50.87 70.13 L 51.76 71.3 L 52.65 70.03 L 53.55 67.92 L 54.44 66.41 L 55.33 97.12 L 56.22 95.93 L 57.12 95.03 L 58.01 95.09 L 58.9 65.56 L 59.79 65.12 L 60.69 82.42 L 61.58 74.7 L 62.47 71.13 L 63.36 82.43 L 64.26 96.02 L 65.15 100.36 L 66.04 98.6 L 66.93 103.37 L 67.82 102.12 L 68.72 97.08 L 69.61 89.74 L 70.5 90.7 L 71.39 93.46 L 72.29 94.24 L 73.18 97.8 L 74.07 97.88 L 74.96 96.63 L 75.86 96.27 L 76.75 97.15 L 77.64 100.12 L 78.53 100.51 L 79.43 106.59 L 80.32 104.54 L 81.21 100.31 L 82.1 118.76 L 83 106.24 L 83.89 114.8 L 84.78 174.89 L 85.67 122.28 L 86.57 149.25 L 87.46 151.47 L 88.35 153.38 L 89.24 153.5 L 90.14 149.24 L 91.03 122.44 L 91.92 122.08 L 92.81 147.16 L 93.71 147.46 L 94.6 119.13 L 95.49 117.97 L 96.38 122.22 L 97.28 116.38 L 98.17 119.53 L 99.06 119.65 L 99.95 120.15 L 100.84 120.22 L 101.74 121.28 L 102.63 121.4 L 103.52 122.97 L 104.41 122.15 L 105.31 120.6 L 106.2 116.55 L 107.09 122.23 L 107.98 120.96 L 108.88 119.54 L 109.77 120.19 L 110.66 120.99 L 111.55 119.92 L 112.45 115.69 L 113.34 116.33 L 114.23 116.07 L 115.12 115.34 L 116.02 111.34 L 116.91 107.23 L 117.8 113.21 L 118.69 98.77 L 119.59 97.04 L 120.48 96.56 L 121.37 96.36 L 122.26 99.7 L 123.16 103.33 L 124.05 100.38 L 124.94 99.68 L 125.83 99.02 L 126.73 102.56 L 127.62 103.25 L 128.51 103.38 L 129.4 104.89 L 130.3 118.07 L 131.19 100.82 L 132.08 103.06 L 132.97 103.47 L 133.86 99.8 L 134.76 111.28 L 135.65 107.73 L 136.54 107.46 L 137.43 108.08 L 138.33 109.82 L 139.22 110.94 L 140.11 111.3 L 141 108.14 L 141.9 109.35 L 142.79 108.38 L 143.68 99.08 L 144.57 99.02 L 145.47 98.61 L 146.36 99.07 L 147.25 99.26 L 148.14 95.1 L 149.04 92.08 L 149.93 92.76 L 150.82 92.87 L 151.71 83.31 L 152.61 82.93 L 153.5 84.86 L 154.39 84.12 L 155.28 94.08 L 156.18 93.31 L 157.07 94.23 L 157.96 94.58 L 158.85 99.33 L 159.75 80 L 160.64 90.28 L 161.53 84.07 L 162.42 68.37 L 163.32 76.88 L 164.21 81.78 L 165.1 80.72 L 165.99 73.89 L 166.88 77.14 L 167.78 67.58 L 168.67 59.82 L 169.56 61.91 L 170.45 61.07 L 171.35 73.74 L 172.24 77.02 L 173.13 78.61 L 174.02 71.59 L 174.92 68.24 L 175.81 72.14 L 176.7 65.37 L 177.59 76.73 L 178.49 88.02 L 179.38 88.01 L 180.27 88.27 L 181.16 86.23 L 182.06 86.14 L 182.95 89.54 L 183.84 94.16 L 184.73 97.72 L 185.63 81.52 L 186.52 92.85 L 187.41 94.14 L 188.3 93.06 L 189.2 92.64 L 190.09 92.44 L 190.98 91.75 L 191.87 90.53 L 192.77 88.27 L 193.66 85.44 L 194.55 82.26 L 195.44 85.08 L 196.34 85.65 L 197.23 53.43 L 198.12 72.01 L 199.01 38.37 L 199.9 69.43 L 200.8 74.46 L 201.69 74.22 L 202.58 82.46 L 203.47 77.01 L 204.37 87.8 L 205.26 91.56 L 206.15 76.69 L 207.04 76.46 L 207.94 78.13 L 208.83 80.06 L 209.72 92.79 L 210.61 87.74 L 211.51 88.21 L 212.4 88.47 L 213.29 87.35 L 214.18 89.69 L 215.08 77.37 L 215.97 87.95 L 216.86 75.16 L 217.75 70.47 L 218.65 85.11 L 219.54 88.1 L 220.43 88.06 L 221.32 86.34 L 222.22 76.91 L 223.11 75.33 L 224 73.6 L 224.89 25.31 L 225.79 44.14 L 226.68 43.93 L 227.57 45.13 L 228.46 44.03 L 229.36 35.73 L 230.25 33.65 L 231.14 34.81 L 232.03 17.64 L 232.92 21.13 L 233.82 19.37 L 234.71 24.66 L 235.6 23.87 L 236.49 22.56 L 237.39 28.48 L 238.28 25.33 L 239.17 28.51 L 240.06 30.83 L 240.96 35.79 L 241.85 34.6 L 242.74 31.2 L 243.63 32.97 L 244.53 33.01 L 245.42 31.38 L 246.31 30.21 L 247.2 27.75 L 248.1 25.27 L 248.99 23 L 249.88 23 L 250 23 L 2000 0 L 2000 1000 L -1000 1000"
                          clip-path="url(#range-id-tsuid_31)"
                          vector-effect="non-scaling-stroke"
                          stroke="none"
                          stroke-width="2"
                          fill='url("#fill-id-tsuid_31")'
                        ></path>
                        <path
                          clip-path="url(#mask-_f1bJZYLUHqWpxc8Prs2meA_32)"
                          d="M 0 42.86 L 0.89 46.26 L 1.78 44.3 L 2.68 44.24 L 3.57 42 L 4.46 43.42 L 5.35 43.62 L 6.25 47 L 7.14 47.65 L 8.03 47.69 L 8.92 45.55 L 9.82 43.19 L 10.71 43.9 L 11.6 42.83 L 12.49 42.81 L 13.39 46.75 L 14.28 43.06 L 15.17 40.8 L 16.06 39.72 L 16.96 39.77 L 17.85 45.77 L 18.74 44.93 L 19.63 44.35 L 20.53 40.29 L 21.42 42.77 L 22.31 42.12 L 23.2 43.4 L 24.1 47.95 L 24.99 50.15 L 25.88 48.59 L 26.77 42.18 L 27.67 44.1 L 28.56 39.91 L 29.45 44.92 L 30.34 47.62 L 31.24 48.06 L 32.13 47.67 L 33.02 56.47 L 33.91 57.74 L 34.8 65.48 L 35.7 64.47 L 36.59 47.25 L 37.48 58.26 L 38.37 52.04 L 39.27 55.8 L 40.16 92.92 L 41.05 105.2 L 41.94 102 L 42.84 106.14 L 43.73 78.71 L 44.62 104.6 L 45.51 96.58 L 46.41 67.56 L 47.3 69.53 L 48.19 69.99 L 49.08 66.75 L 49.98 69.72 L 50.87 70.13 L 51.76 71.3 L 52.65 70.03 L 53.55 67.92 L 54.44 66.41 L 55.33 97.12 L 56.22 95.93 L 57.12 95.03 L 58.01 95.09 L 58.9 65.56 L 59.79 65.12 L 60.69 82.42 L 61.58 74.7 L 62.47 71.13 L 63.36 82.43 L 64.26 96.02 L 65.15 100.36 L 66.04 98.6 L 66.93 103.37 L 67.82 102.12 L 68.72 97.08 L 69.61 89.74 L 70.5 90.7 L 71.39 93.46 L 72.29 94.24 L 73.18 97.8 L 74.07 97.88 L 74.96 96.63 L 75.86 96.27 L 76.75 97.15 L 77.64 100.12 L 78.53 100.51 L 79.43 106.59 L 80.32 104.54 L 81.21 100.31 L 82.1 118.76 L 83 106.24 L 83.89 114.8 L 84.78 174.89 L 85.67 122.28 L 86.57 149.25 L 87.46 151.47 L 88.35 153.38 L 89.24 153.5 L 90.14 149.24 L 91.03 122.44 L 91.92 122.08 L 92.81 147.16 L 93.71 147.46 L 94.6 119.13 L 95.49 117.97 L 96.38 122.22 L 97.28 116.38 L 98.17 119.53 L 99.06 119.65 L 99.95 120.15 L 100.84 120.22 L 101.74 121.28 L 102.63 121.4 L 103.52 122.97 L 104.41 122.15 L 105.31 120.6 L 106.2 116.55 L 107.09 122.23 L 107.98 120.96 L 108.88 119.54 L 109.77 120.19 L 110.66 120.99 L 111.55 119.92 L 112.45 115.69 L 113.34 116.33 L 114.23 116.07 L 115.12 115.34 L 116.02 111.34 L 116.91 107.23 L 117.8 113.21 L 118.69 98.77 L 119.59 97.04 L 120.48 96.56 L 121.37 96.36 L 122.26 99.7 L 123.16 103.33 L 124.05 100.38 L 124.94 99.68 L 125.83 99.02 L 126.73 102.56 L 127.62 103.25 L 128.51 103.38 L 129.4 104.89 L 130.3 118.07 L 131.19 100.82 L 132.08 103.06 L 132.97 103.47 L 133.86 99.8 L 134.76 111.28 L 135.65 107.73 L 136.54 107.46 L 137.43 108.08 L 138.33 109.82 L 139.22 110.94 L 140.11 111.3 L 141 108.14 L 141.9 109.35 L 142.79 108.38 L 143.68 99.08 L 144.57 99.02 L 145.47 98.61 L 146.36 99.07 L 147.25 99.26 L 148.14 95.1 L 149.04 92.08 L 149.93 92.76 L 150.82 92.87 L 151.71 83.31 L 152.61 82.93 L 153.5 84.86 L 154.39 84.12 L 155.28 94.08 L 156.18 93.31 L 157.07 94.23 L 157.96 94.58 L 158.85 99.33 L 159.75 80 L 160.64 90.28 L 161.53 84.07 L 162.42 68.37 L 163.32 76.88 L 164.21 81.78 L 165.1 80.72 L 165.99 73.89 L 166.88 77.14 L 167.78 67.58 L 168.67 59.82 L 169.56 61.91 L 170.45 61.07 L 171.35 73.74 L 172.24 77.02 L 173.13 78.61 L 174.02 71.59 L 174.92 68.24 L 175.81 72.14 L 176.7 65.37 L 177.59 76.73 L 178.49 88.02 L 179.38 88.01 L 180.27 88.27 L 181.16 86.23 L 182.06 86.14 L 182.95 89.54 L 183.84 94.16 L 184.73 97.72 L 185.63 81.52 L 186.52 92.85 L 187.41 94.14 L 188.3 93.06 L 189.2 92.64 L 190.09 92.44 L 190.98 91.75 L 191.87 90.53 L 192.77 88.27 L 193.66 85.44 L 194.55 82.26 L 195.44 85.08 L 196.34 85.65 L 197.23 53.43 L 198.12 72.01 L 199.01 38.37 L 199.9 69.43 L 200.8 74.46 L 201.69 74.22 L 202.58 82.46 L 203.47 77.01 L 204.37 87.8 L 205.26 91.56 L 206.15 76.69 L 207.04 76.46 L 207.94 78.13 L 208.83 80.06 L 209.72 92.79 L 210.61 87.74 L 211.51 88.21 L 212.4 88.47 L 213.29 87.35 L 214.18 89.69 L 215.08 77.37 L 215.97 87.95 L 216.86 75.16 L 217.75 70.47 L 218.65 85.11 L 219.54 88.1 L 220.43 88.06 L 221.32 86.34 L 222.22 76.91 L 223.11 75.33 L 224 73.6 L 224.89 25.31 L 225.79 44.14 L 226.68 43.93 L 227.57 45.13 L 228.46 44.03 L 229.36 35.73 L 230.25 33.65 L 231.14 34.81 L 232.03 17.64 L 232.92 21.13 L 233.82 19.37 L 234.71 24.66 L 235.6 23.87 L 236.49 22.56 L 237.39 28.48 L 238.28 25.33 L 239.17 28.51 L 240.06 30.83 L 240.96 35.79 L 241.85 34.6 L 242.74 31.2 L 243.63 32.97 L 244.53 33.01 L 245.42 31.38 L 246.31 30.21 L 247.2 27.75 L 248.1 25.27 L 248.99 23 L 249.88 23 L 250 23 L 2000 0 L 2000 1000 L -1000 1000"
                          vector-effect="non-scaling-stroke"
                          stroke="#34a853"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full"></div>
        </div>
        <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground size-9 absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2 opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              className="size-4"
            >
              <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z"></path>
            </svg>
            <span className="sr-only">Scroll to bottom</span>
          </button>
          <div className="mx-auto sm:max-w-2xl sm:px-4">
            <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0"></div>
            <div className="flex h-12 items-center justify-center">
              <div className="flex space-x-2"></div>
            </div>
            <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
              <form>
                <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground absolute left-0 top-[14px] size-8 rounded-full bg-background p-0 sm:left-4"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"></path>
                    </svg>
                    <span className="sr-only">New Chat</span>
                  </button>
                  <textarea
                    tabIndex={0}
                    placeholder="Send a message."
                    className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm h-[62px]"
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    name="message"
                    rows={1}
                  ></textarea>
                  <div className="absolute right-0 top-[13px] sm:right-4">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 size-9"
                      type="submit"
                      data-state="closed"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"></path>
                      </svg>
                      <span className="sr-only">Send message</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="px-2 text-center text-xs leading-normal text-muted-foreground hidden sm:block">
                Open source AI chatbot built with{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  className="inline-flex flex-1 justify-center gap-1 leading-4 hover:underline"
                >
                  <span>Next.js</span>
                  <svg
                    aria-hidden="true"
                    height="7"
                    viewBox="0 0 6 6"
                    width="7"
                    className="opacity-70"
                  >
                    <path
                      d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>{' '}
                and{' '}
                <a
                  href="https://github.com/vercel/ai"
                  target="_blank"
                  className="inline-flex flex-1 justify-center gap-1 leading-4 hover:underline"
                >
                  <span>Vercel AI SDK</span>
                  <svg
                    aria-hidden="true"
                    height="7"
                    viewBox="0 0 6 6"
                    width="7"
                    className="opacity-70"
                  >
                    <path
                      d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
