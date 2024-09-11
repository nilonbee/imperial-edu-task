import React, { ReactElement } from "react";

export const TwitterIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path fill="url(#pattern0_1_1064)" d="M0 0H24V24H0z"></path>
        <defs>
            <pattern
                id="pattern0_1_1064"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
            >
                <use transform="scale(.01042)" xlinkHref="#image0_1_1064"></use>
            </pattern>
            <image
                id="image0_1_1064"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGOElEQVR4nO2deYjVVRTHP29aTHO0RU0ry/ZsX7CyxQopbbGIoQ2jTcFIgxYwMLAFJijSKFrJxMwWbCEqppJ22ynTQpPUNiu1zakxl9GZFxduMMj8zrnv/e5ve+9+4PeX8zvv3PN77/7Oved+jxAIBAKBQCAQCAQCgUAgEAhEcxWwBih7uDYBy4F7gb1yGvRbBf87gKY0nSkBf3kKfnmr629gDPniEqBT8HlKFk4tSegBlIENwHDywQnWnyhfZ2fl2EnAlgQfwk/AzmTL3sBqwccPgB5ZOnh7gg+gDMzNcGyNwCLBt++BAWTMtsBHCT+EsRmMqwF4WfDpH+BwcsK+9sXZnaPmxXWug43RwkuuFRhCutwnBH+L45hS5QrBYZOqDnSw8aAy125DOoxTfpGTyClPC06/ZlNXiR2ArwQbU1MYwxnAZsGHx8gxOwE/CM5f62DjMCHl25xwanowsFbw/w37zss1pwip6QbHF9dNQhBWAH0S8HtXYJnwud/YL1ghuFMYyNd2qpEoAS2CjVme/d0OeEf4vD+A/SkQ5mf6iTCgaQ42dlMWQJd69He28DntwGkUkP1srhyVmp7tYON8ITBr7So1LrcoGc94Csx4YWCr7bdc41HBxvyYqWmT3cWMst9MDfCsMMCXHO7vZV+AvnchjwHWCXZfsKvhwmMyhx+FgU5wDNYmITU1u5WVsDuwUvBpAbAjNcQIITX91+bfGjcLAVtuN85c6A0sFGz9CuxJDXK3MOgvgO2V+8108JZgY4aDDw122ouysR44jhrF5NqfCoO/y8HGHjYnj7JxsXL/NOHeTof7C49ZzLRFBKADGOlg4wIlNY2qJ1+tpJtmiqsLrhGC8LPdEtB4XLDxXjep6QjhJZ7Eyjr3SPPwiw73mwxlqWBjcpe/PUg5PDA/65JiFvSz2UZUUMY52DhW+Fa325fpLsC3wud8B/SnTjlTqIC1AQc42JgiBHepnY6k98VQ6pzpQoA+d0xN31Zert1dZk1yTkpjzDU9lEVRs4MNs2j6s8IH4FIYqhsOsQugckRqerrjpppr8E2xPbAVk4SArbQvU40nHIL/ehFKillQAl4VAmd2VDUabbky7VJmzdAfWCUE0Bx70RhmU9Co1NT8e0BglIfUVDpCvsTWFwIC9wsB/Mxu6mmp6buCjYdC9PXUdJEQQHMYWGOwsv1wXngIMocqqempDgG8THgAvwODwkOQucGDbmCOcspNOypZ15SU1NRFN9DXnuGPsnF9CuMoNAOUw1ljY6p4NgJHpjCOQnOWB93AHcJDXAz0TGEchebhmLoBTcVjUt+AwEVC8Fx1Az6OStYlRwmF/Ep1A1cKNn5zVPHUFYNsyll2uFw32+KqeOqGnsoR92pPN2gqnokpjC33lIBnKgx+JboBTcVzBHVOsxLkJ6s8nOWq4llYj0dV/udyJfimm4rhkZi6AR8qnprjZLs6dSkp+tANhNS0C/sovYcW272drhyt6AaOj6niWeOo4ik8fax6Uto+Nt/W7pjsQTcgqXhaaj01NVPKvBh9g0wF7M2YugEfKp7CIvWH6LSFlaR1A75UPDVVdCk7lh/j6gZcVTwLHI5KForRSret56qYe2dUqBtIQsVTmOOIrcrB3F5V2K1EN5CkiifXDFReeL/YOb1aXHQDGhM8qHhyiWnS8bEwuDZPJUJJN7DMSlU15sZU8eQOM58/JQyqw/aG8IGmGzDbGGmoeHKFVJct2x5BPtF0Axc6ds+Kqkevs/qzwpQUpa6zMxP63CZldW1aFiSt4smcE5Wus+8nPIhZwmfPc2jIYbalvyxqR5UhygbbCjvXJklvRSl5Y0oqntRpVDogmvn5wJR8GSboBjbawr/GRA8qntQwK85XBIfbM1jQTI2pGygpnXSfJ0c8oGQ8pl1B2jQougHjc1wVj6nmZc51SvDvydC3wYJuoNNRN+BDxZMYo5Susy0pth+uRjfg43JR8STCUKXrbHclxayYk/BDuC3tAfWz5b8oh1bl7P+F6avoBuJerioebxtsHwrOrHcsjqfNcGWBGPcyv/jMN9jy3gZsjFKXiHOZEmmmuXVa7eZ9ZEbT7WpZ6qpVydXqKCwPBAKBQCAQCAQCgUAgEAhQn/wHyyhFk0lZ5OYAAAAASUVORK5CYII="
            ></image>
        </defs>
    </svg>
);
