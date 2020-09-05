import React, { useEffect } from 'react'
import { RouteComponentProps } from "react-router-dom"
import { revealElements, animateJobPattern, animateMiddleClassPattern, animateAssetPattern } from "./CashflowPatternsAnimation"
import "./CashflowPatterns.css"
// @ts-ignore
import { Section, Columns, Button } from "react-bulma-components";

interface MatchParams {
    name: string
}

interface CashflowPatternsProps extends RouteComponentProps<MatchParams> {
}

const CashflowPatterns: React.FC<CashflowPatternsProps> = ({ match }) => {
    useEffect(() => {
        revealElements();
    }, []);
    return (
        // <h2>Cashflow Pattern {match.params.name}</h2>
        <Section id="CashflowPatterns" className="has-background-white-ter hero is-fullheight-with-navbar">
            <Columns centered className="is-mobile">

                <Columns.Column id="buttons-column" className="is-full-mobile is-one-fifth-tablet">
                    <Button id="button-poor" onClick={animateJobPattern} class="button is-text">poor</Button>
                    <Button id="button-middle-class" onClick={animateMiddleClassPattern} class="button is-text">middle class</Button>
                    <Button id="button-rich" onClick={animateAssetPattern} class="button is-text">rich</Button>
                </Columns.Column>
                <Columns.Column className="is-full-mobile is-half-tablet has-text-left-tablet">

                    <svg id="financial_statement" data-name="financial statement" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 672 853.84">
                        <defs>
                            <filter id="blurFilter">
                                {/* stdDeviation is amount of blur */}
                                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                            </filter>
                            <filter id="colorShadow" x="0" y="0" width="100" height="100">
                                <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
                                <feColorMatrix result="matrixOut" in="offOut" type="matrix"
                                    // rgb(35,209,96)
                                    values="
            0.2 0 0 0 0 
            0 0.2 0 0 0 
            0 0 0.2 0 0 
            0 0 0 1 0" />
                                {/* values="
            0 0.137254902 0 0 0 
            0 0 0.819607843 0 0 
            0 0 0 0.376470588 0 
            0 0 0 1 0" /> */}
                                <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                                <feComponentTransfer result="lowerAlphaOut" in="blurOut">
                                    <feFuncA type="linear" slope="0" />
                                </feComponentTransfer>
                                <feBlend in="SourceGraphic" in2="lowerAlphaOut" mode="normal" />
                                {/* <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge> */}
                            </filter>
                        </defs>
                        <path fill="#fff" d="M0 0h672v853.84H0z" id="background" />
                        <path fill="#fff" d="M347 507.92h175v276H347z" id="liability-box" className="box" />
                        <g id="liability-text" className="box-text">
                            <path d="M394.54 557.45a.43.43 0 0 1 .31-.09 2.48 2.48 0 0 1 .69.11c.24.08.37.15.39.22s0 .35.13.91a1.06 1.06 0 0 0 0 .15 1.21 1.21 0 0 1 0 .18 2.67 2.67 0 0 1-.18 1.05 13.54 13.54 0 0 0-.37 2.22c-.07.9-.2 2-.37 3.26q-.27 1.51-.36 2.4c0 .14-.05.42-.12.81l-.12.79a2.22 2.22 0 0 0-.09.58c0 .25.18.47.53.68a1.65 1.65 0 0 0 .66.2 3 3 0 0 0 1-.31 14.45 14.45 0 0 1 3.82-1.23.26.26 0 0 1 .18 0 .15.15 0 0 1 0 .11c0 .37-.79.93-2.38 1.69a9.38 9.38 0 0 1-3.49 1.15h-.26a2.08 2.08 0 0 1-1.13-.72 2.58 2.58 0 0 1-.33-1.46 15 15 0 0 1 .25-2.31c.24-1.41.48-3.07.7-5s.33-3.22.33-3.91a5.94 5.94 0 0 1 .21-1.48zM402 559a.68.68 0 0 1 .63-.46.76.76 0 0 1 .58.31c.16.22.25 2 .28 5.21a32.35 32.35 0 0 0 .4 6.45 7.64 7.64 0 0 1 .26 1.45c0 .25-.09.38-.26.38a.55.55 0 0 1-.25-.05c-.68-.28-1.12-2.54-1.29-6.77a42.9 42.9 0 0 0-.38-5 3.63 3.63 0 0 1-.08-.84 1.4 1.4 0 0 1 .11-.68zm8.86-.76a1.31 1.31 0 0 1 .14-.7.55.55 0 0 1 .5-.2h.33a.58.58 0 0 1 .52.29 8.7 8.7 0 0 1 .21 1.45 9.45 9.45 0 0 0 .53 2.75c.2.54.6 1.83 1.18 3.85s.94 3.26 1 3.7a11.18 11.18 0 0 0 .5 1.65 5.14 5.14 0 0 0 .57 1.23.52.52 0 0 1 .12.33 1 1 0 0 1-.24.64.64.64 0 0 1-.51.3c-.22 0-.57-.24-1.06-.74s-.73-.86-.73-1.08-.51-1-1.55-2.11a8.46 8.46 0 0 0-2.16-1.94 1.55 1.55 0 0 1-.66-.43 1 1 0 0 1-.16-.63v-.7l1.71.17 1.7.14-.13-1a6.91 6.91 0 0 0-.5-1.58 6.54 6.54 0 0 1-.51-1.63c-.12-.57-.24-.86-.37-.86s-.25.17-.36.51a19.07 19.07 0 0 1-.94 2.22 39.17 39.17 0 0 0-2.14 5.14 5.5 5.5 0 0 1-.78 1.85c-.4.66-.74 1-1 1.13a3.54 3.54 0 0 1-.44.08c-.32 0-.48-.15-.48-.46a1.94 1.94 0 0 1 .52-1.12 12.3 12.3 0 0 0 1.1-1.87 7 7 0 0 0 .73-1.65 2.86 2.86 0 0 1 .35-.92c2.02-4.46 3.01-7.05 3.01-7.81zm2.49 9c-.12-.25-.23-.37-.33-.37a.91.91 0 0 0-.46.2c-.15.1-.22.19-.22.26a.82.82 0 0 0 .17.33c.24.28.45.42.64.42s.31-.13.31-.37a1.47 1.47 0 0 0-.11-.45zm5.21-9.88h.22a11.1 11.1 0 0 1 1.13.11 3.13 3.13 0 0 1 1 .43c.29.2.78.61 1.47 1.22a2.67 2.67 0 0 1 .46 1.61 4.85 4.85 0 0 1 .07.77 2.67 2.67 0 0 1-.44 1.45l-.51.86 1.08.88a5.7 5.7 0 0 0 1.23.88q.19 0 1.38 1.32a8.73 8.73 0 0 1 1.28 1.63 1.19 1.19 0 0 1 .05.28 3 3 0 0 1-1.39 2.14 7.52 7.52 0 0 1-3.17 1.47 17.2 17.2 0 0 1-2.64.44 2.16 2.16 0 0 1-.74-.15 1.8 1.8 0 0 1-1.3-1.81 2.73 2.73 0 0 1 .42-1.41c.26-.45.47-.68.63-.68s.16.11.16.33a2.18 2.18 0 0 1-.07.49 3.85 3.85 0 0 0-.06.66c0 .58.14.87.41.87a.28.28 0 0 0 .14 0c.23-.07.35 0 .35.14s.12.15.37.15a4.19 4.19 0 0 0 .68-.07 12.79 12.79 0 0 0 2-.43c.62-.18.93-.31.93-.4s.17-.17.52-.2a2 2 0 0 0 1.05-.61c.43-.38.65-.68.65-.89s-.52-.72-1.54-1.64a31.33 31.33 0 0 0-2.82-2.25c-1-.63-1.45-1.15-1.45-1.56s.22-.42.66-.47a1.14 1.14 0 0 0 .84-.54 2 2 0 0 0 .35-1.13 2.18 2.18 0 0 0-.5-1.25 3.16 3.16 0 0 0-2.1-1.28c-.29 0-.49.19-.59.56a9.93 9.93 0 0 0-.18 2 24.41 24.41 0 0 1-.44 5.59.55.55 0 0 1-.55.41.64.64 0 0 1-.43-.17.9.9 0 0 1-.29-.49 6.05 6.05 0 0 1-.05-.92c0-1.1.05-2.29.16-3.56s.2-2.4.3-3a3.06 3.06 0 0 1 .44-1.28 1.31 1.31 0 0 1 .83-.5zm9.62 1.64a.69.69 0 0 1 .63-.46.76.76 0 0 1 .58.31c.16.22.25 2 .28 5.21a32.35 32.35 0 0 0 .4 6.45 6.88 6.88 0 0 1 .26 1.45c0 .25-.08.38-.26.38a.54.54 0 0 1-.24-.05q-1-.42-1.3-6.77a43.78 43.78 0 0 0-.37-5 3.61 3.61 0 0 1-.09-.84 1.4 1.4 0 0 1 .11-.68zm5.23-1.66a1 1 0 0 1 .8-.29c.38 0 .61.1.7.29a.51.51 0 0 1 0 .16 7.08 7.08 0 0 1-.3 1.56 7.43 7.43 0 0 1-.54 1.56 2 2 0 0 0-.26 1.06c0 .42-.09.66-.26.7s-.43.61-.65 1.61a12.44 12.44 0 0 0-.34 2.81 5.75 5.75 0 0 0 .12 1.41 1.79 1.79 0 0 0 .51.79 1.6 1.6 0 0 0 1.06.64h.55a10.14 10.14 0 0 0 2.53-.28 7.28 7.28 0 0 1 2-.25c.82 0 1.23.1 1.23.29s-.86.56-2.59 1.12a14.23 14.23 0 0 1-3.5.84 2.53 2.53 0 0 1-1.67-.65 4.47 4.47 0 0 1-1.2-1.77 6 6 0 0 1-.3-2.11 18.35 18.35 0 0 1 .72-4.65c.33-1.17.6-2.26.84-3.27a6.07 6.07 0 0 1 .55-1.57zm8.59 1.12a1.61 1.61 0 0 1 .55 0 .77.77 0 0 1 .75.55 4.54 4.54 0 0 1 .15 1.36 2.52 2.52 0 0 1-.2 1.28 14.92 14.92 0 0 0-.22 3v.35c0 1 .07 2.22.21 3.62a9.67 9.67 0 0 0 .39 2.39 1.08 1.08 0 0 1 .18.5c0 .18-.1.27-.29.27a.8.8 0 0 1-.31-.07c-.32-.13-.61-.58-.86-1.36a11.18 11.18 0 0 1-.46-2.77c-.07-1.62-.11-3.1-.11-4.47a26.24 26.24 0 0 1 .22-4.65zm2.88.2c.05-.19.22-.28.5-.28a1.83 1.83 0 0 1 .44 0c1.1.22 1.91.37 2.44.46a2.27 2.27 0 0 1 .73.22 22.34 22.34 0 0 0 2.4.42 26.29 26.29 0 0 1 4 .86 15.84 15.84 0 0 0 2.18.59.8.8 0 0 1 .52.13.29.29 0 0 1 .11.2c0 .12-.17.18-.53.18a16.84 16.84 0 0 1-2-.2c-1.4-.22-2.66-.37-3.78-.46l-1.45-.13-.09 3.65c-.06 2.26-.09 4-.09 5.23v.8c0 1.56-.1 2.39-.31 2.46a.33.33 0 0 1-.48-.15 48.41 48.41 0 0 1-.2-6c0-2.76-.06-4.47-.13-5.14s-.29-1-.64-1l-.37.05c-.29.06-.44 0-.44-.16s-.18-.22-.53-.13a.94.94 0 0 1-.26 0 3.08 3.08 0 0 1-1.21-.29c-.44-.2-.71-.41-.79-.63a.93.93 0 0 1-.05-.37 1.07 1.07 0 0 1 .03-.31zm13.61-.59a.39.39 0 0 1 .38-.18 1.05 1.05 0 0 1 .6.23 1.09 1.09 0 0 1 .41.54 16.69 16.69 0 0 0 1 3.41 1.93 1.93 0 0 1 .24.84 2.15 2.15 0 0 0 .44.9c.3.42.55.64.75.64a.23.23 0 0 0 .18-.07 1 1 0 0 1 .72-.28c.33 0 .49.1.49.3s0 .14.09.14.33-.18.61-.54a5 5 0 0 0 .68-1.16c.55-1.25.9-2.12 1.06-2.62a5.26 5.26 0 0 0 .26-1.51c0-.56.17-.84.4-.84s.34.19.51.57a1.42 1.42 0 0 1 .06.44 7.15 7.15 0 0 1-.75 2.64 16.69 16.69 0 0 1-1.71 3c-.65.89-1.17 1.34-1.56 1.34-.11 0-.23.08-.37.25a2.28 2.28 0 0 0-.34.59 13.42 13.42 0 0 0-1 4.35 1.68 1.68 0 0 0 .38 1.3c.19.18.28.32.28.42s-.1.22-.31.22a1.21 1.21 0 0 1-.72-.29 1.4 1.4 0 0 1-.54-.65 4.54 4.54 0 0 1-.14-1.26 11.84 11.84 0 0 1 .57-3.32l.55-1.9-.57-.5a4 4 0 0 1-.81-1.17q-.31-.68-1.17-3.21a11.26 11.26 0 0 1-.73-2.6z" transform="translate(-41 -37.08)" />
                        </g>
                        <path fill="#fff" d="M151 507.92h175v276H151z" id="asset-box" className="box" />
                        <g id="asset-text" className="box-text">
                            <path d="M209.73 557.34a.63.63 0 0 1 .12-.46.78.78 0 0 1 .48-.11c.42 0 .67.13.75.4a4.77 4.77 0 0 0 .3.79 5 5 0 0 1 .38 1.43 14.64 14.64 0 0 0 .48 2.15c.71 2.47 1.09 4 1.17 4.54a13.23 13.23 0 0 0 .77 3.27 3.63 3.63 0 0 1 .31 1.35 1.56 1.56 0 0 1-.22.88c-.11.14-.19.21-.25.21a1.53 1.53 0 0 1-.71-.43l-2.17-1.92a16.62 16.62 0 0 0-3-2.31c-.53-.22-.79-.52-.79-.9a.79.79 0 0 1 .46-.83 7.08 7.08 0 0 1 2-.18h1.94l-.09-.66c-.06-.43-.15-.64-.28-.64s-.19-.18-.22-.55a9 9 0 0 0-.2-1.56c-.12-.51-.23-.77-.33-.77s-.22-.12-.22-.35a.31.31 0 0 0-.35-.35.63.63 0 0 0-.53.28 17.48 17.48 0 0 0-1.65 3.17 11.35 11.35 0 0 1-1.07 1.77 7.88 7.88 0 0 1-1.18 1.46 4.6 4.6 0 0 0-.52.84 30.12 30.12 0 0 1-1.82 3.09c-.61.89-1 1.38-1.31 1.46a1.25 1.25 0 0 1-.26.05.64.64 0 0 1-.42-.15.42.42 0 0 1-.18-.34.39.39 0 0 1 .09-.26c.15-.18.68-1 1.61-2.35s1.46-2.18 1.6-2.36a6.67 6.67 0 0 0 .8-1.32 9.72 9.72 0 0 1 1.16-1.76 20 20 0 0 0 2.06-3.48 11 11 0 0 0 1.29-3.1zm2.56 9.26q-.28-.72-.42-.72a6.1 6.1 0 0 0-1 .35 3.93 3.93 0 0 0-.81.39.22.22 0 0 0-.06.14c0 .23.57.82 1.71 1.76l1.17 1-.18-1.08a8.71 8.71 0 0 0-.41-1.84zm4.79-7.76a4.19 4.19 0 0 1 .95-.18 1.28 1.28 0 0 1 .77.29.53.53 0 0 1 .26.39c0 .25-.24.38-.72.38a2.3 2.3 0 0 0-1.21.39 1.52 1.52 0 0 0-.75.84.69.69 0 0 0 0 .24 2 2 0 0 0 .5 1.15 23.86 23.86 0 0 0 1.83 2 26 26 0 0 1 2.8 3.12 3.77 3.77 0 0 1 .87 2c0 .68-.45 1.28-1.36 1.81a3.22 3.22 0 0 1-.87.37 5.51 5.51 0 0 1-1.16.09h-1.16a11.62 11.62 0 0 1-2.33-.23c-.47-.13-.71-.33-.71-.61s.3-.78.9-1.43a7.16 7.16 0 0 1 1.51-1.19 3.15 3.15 0 0 1 1.35-.57.22.22 0 0 1 .16.05c.07.1 0 .19-.2.26a4.54 4.54 0 0 0-1.3 1.07c-.59.61-.88 1-.88 1.2a.37.37 0 0 0 .28.36 3.79 3.79 0 0 0 1 .1l1.3-.05a3.83 3.83 0 0 0 1.8-.35 1.33 1.33 0 0 0 .55-1.12v-.26a2.23 2.23 0 0 0-.55-1.37c-.5-.61-1-1.17-1.44-1.66s-.73-.74-.82-.74a5.92 5.92 0 0 1-1.32-1.23 15.31 15.31 0 0 1-1.54-1.8 2.06 2.06 0 0 1-.35-1.15 2 2 0 0 1 .49-1.29 2.69 2.69 0 0 1 1.35-.88zm9.73.35l.81-.15a5.35 5.35 0 0 1 1.08.33q.9.39.9.9a.42.42 0 0 1-.24.44 4.91 4.91 0 0 1-1.21.08h-1.45l.15.91c.18 1.08 1.42 2.72 3.74 4.9a13.51 13.51 0 0 1 1.35 1.42 1.58 1.58 0 0 1 .28 1v.13a2.08 2.08 0 0 1-.75 1.59 4 4 0 0 1-1.84.9 19.43 19.43 0 0 1-3.42.22 22.35 22.35 0 0 1-2.28-.08 1.35 1.35 0 0 1-.84-.32c-.28-.25-.42-.42-.42-.53a5 5 0 0 1 .86-1.15c.57-.67.9-1 1-1s.2.28.26.83l.07.84h2.35a6.6 6.6 0 0 0 3-.44q.66-.5.66-.66a10.88 10.88 0 0 0-1.74-2 25.33 25.33 0 0 1-3.08-3.72c-.49-.72-.81-1.24-1-1.56a1.87 1.87 0 0 1-.25-.86 1.77 1.77 0 0 1 0-.33 1.9 1.9 0 0 1 .65-1.06 2.75 2.75 0 0 1 1.36-.63zm7.67-.64a4.84 4.84 0 0 1 .84-.06c.54 0 1.81.09 3.81.28 1.11.1 1.67.27 1.67.51a.33.33 0 0 1-.31.37l-.81.11a18 18 0 0 1-2.27.13 4.8 4.8 0 0 0-2.37.41 2 2 0 0 0-.53 1.68v.71a.93.93 0 0 0 .14.47.7.7 0 0 0 .28.32 5.66 5.66 0 0 0 .62.18 6.17 6.17 0 0 0 .92.13l1.45.09c1.05.07 1.74.14 2.07.2s.5.19.5.37-.13.26-.39.36a9.3 9.3 0 0 1-1.48.34 16.48 16.48 0 0 1-2.82.31h-.13l-1-.07.16 1.94c.1 1.41.24 2.11.41 2.11s.14-.07.25-.22a.47.47 0 0 1 .44-.18 2 2 0 0 1 .33.05 28.15 28.15 0 0 0 4.22.26c1.44.06 2.39.12 2.87.18s.72.16.72.31-.06.35-.18.35a16.85 16.85 0 0 0-1.72.26 28.83 28.83 0 0 1-4.15.35l-2.64.09-.07.77a1.73 1.73 0 0 1-.13.6.33.33 0 0 1-.31.15h-.2c-.38-.06-.57-.19-.57-.4a2.4 2.4 0 0 0-.07-.38 3 3 0 0 1-.06-.52v-.2a.66.66 0 0 1 0-.11.86.86 0 0 0 0-.15 16.15 16.15 0 0 0-.29-2.49 5.84 5.84 0 0 0-.46-1.82A2.1 2.1 0 0 1 233 565a11 11 0 0 0-.29-2.16 7.92 7.92 0 0 1-.22-1.69 2.55 2.55 0 0 1 .69-1.87 2.19 2.19 0 0 1 1.3-.73zm9.93.11c.05-.19.22-.28.5-.28a1.83 1.83 0 0 1 .44 0c1.1.22 1.92.37 2.44.46a2.27 2.27 0 0 1 .73.22 22.34 22.34 0 0 0 2.4.42 26.29 26.29 0 0 1 4 .86 15.84 15.84 0 0 0 2.18.59.78.78 0 0 1 .52.13.29.29 0 0 1 .11.2c0 .12-.17.18-.52.18a16.46 16.46 0 0 1-2-.2 51.46 51.46 0 0 0-3.79-.46l-1.45-.13-.09 3.65c-.06 2.26-.09 4-.09 5.23v.8c0 1.56-.1 2.39-.3 2.46a.35.35 0 0 1-.49-.15 48.41 48.41 0 0 1-.2-6c0-2.76-.06-4.47-.13-5.14s-.28-1-.64-1l-.37.05c-.29.06-.44 0-.44-.16s-.18-.22-.53-.13a.94.94 0 0 1-.26 0 3.08 3.08 0 0 1-1.21-.29c-.44-.2-.71-.41-.79-.63a.93.93 0 0 1 0-.37 1.07 1.07 0 0 1-.02-.31z" transform="translate(-41 -37.08)" />
                        </g>
                        <path fill="#fff" d="M199 270.92h276v175H199z" id="expense-box" className="box" />
                        <g id="expense-text" className="box-text">
                            <path d="M258.75 320a2.43 2.43 0 0 1 .42 0 16.69 16.69 0 0 1 3.63 1q1.47.56 1.47.84c0 .13-.26.2-.79.2a16.16 16.16 0 0 1-2.11-.2 9.87 9.87 0 0 0-1.17-.11.85.85 0 0 0-.33 0 7.18 7.18 0 0 0-.29 2.53l-.06 2.34 2.57-.09h1c1.16 0 1.74.09 1.74.28s-.34.29-1 .49a20 20 0 0 0-3.41 1.14 1.31 1.31 0 0 0-.35.92c0 1.68.25 2.51.74 2.51a28.46 28.46 0 0 0 5.26-1.3 13 13 0 0 1 1.65-.44c.09 0 .13.06.13.18v.11c0 .19-.28.44-.85.74a3.27 3.27 0 0 1-1.39.45 1 1 0 0 0-.79.39 5.68 5.68 0 0 1-1.63 1 5.59 5.59 0 0 1-1.78.65c-.25 0-.46.21-.64.62a.77.77 0 0 1-.7.57h-.11c-.43-.06-.77-.75-1-2.07a49.76 49.76 0 0 1-.6-6.25c-.1-1.8-.16-3.22-.16-4.26a7.22 7.22 0 0 1 .14-1.73c.03-.31.19-.51.41-.51zm16.08 7.9c0 .09.13.28.38.58s.39.5.39.61.12.3.37.46a1.11 1.11 0 0 1 .51.81 6.81 6.81 0 0 0 1.09 1.74 5.69 5.69 0 0 0 1.33 1.48c.15 0 .22.24.22.59s-.12.46-.37.46a2.55 2.55 0 0 1-1.46-.88 5.57 5.57 0 0 0-1.49-1.12 5.83 5.83 0 0 1-1-.48 7.18 7.18 0 0 0-3-1.17 1.16 1.16 0 0 0-.84.29 2.64 2.64 0 0 1-1.82.7c-.5 0-.82-.13-1-.4a.66.66 0 0 1-.11-.35.75.75 0 0 1 .29-.59.94.94 0 0 1 .68-.27c.31 0 .46-.08.46-.24a.29.29 0 0 1 .05-.17.14.14 0 0 1 .15-.05h.13a2.89 2.89 0 0 0 1.22-.39c.51-.27.79-.5.85-.71a1 1 0 0 1 .11-.23.38.38 0 0 1 .12-.13h.08a.89.89 0 0 0 .55-.33 1.06 1.06 0 0 0 .33-.77c0-.34-.13-.51-.4-.51s-.16-.08-.08-.24 0-.34-.25-.42-.26-.13-.27-.17.05-.11.19-.2a.92.92 0 0 0 .16-.13v-.07a1 1 0 0 0-.23 0 .48.48 0 0 1-.34-.19 1.28 1.28 0 0 1-.3-.43 10.83 10.83 0 0 0-2.27-3.1c-.52-.56-.79-1-.79-1.25s.13-.33.38-.42a2.09 2.09 0 0 1 .79-.15c.31 0 .46.05.46.17a.17.17 0 0 1 0 .09v.07a3.64 3.64 0 0 0 .81 1.51 29.41 29.41 0 0 1 1.67 2.45 8.75 8.75 0 0 0 1.19 1.69l.53.57 1.25-1.21a20.23 20.23 0 0 0 2.25-2.59 6.44 6.44 0 0 0 1.25-2.07 1.9 1.9 0 0 1 .55-1c.35-.44.56-.66.62-.66s0 0 0 .09v.33a10 10 0 0 1-1.35 2.91 22.86 22.86 0 0 1-2.37 3.38 13.25 13.25 0 0 0-1.67 2.11zm-.24 1.8a1.44 1.44 0 0 0-.31-.63.39.39 0 0 0-.29-.2c-.11 0-.37.22-.77.66s-.61.76-.61.92.54.42 1.61.77a15.17 15.17 0 0 0 1.8.53h.06a4.36 4.36 0 0 0-.74-1c-.5-.56-.75-.91-.75-1.05zm9.9-9.57a.65.65 0 0 1 .48-.3c.35 0 1 .55 2 1.65 1.84 2 2.75 3.75 2.75 5.1a4.28 4.28 0 0 1-.83 2.42 3.59 3.59 0 0 1-2.82 1.85 1.62 1.62 0 0 1-.81-.2.94.94 0 0 0-.38-.15q-.15 0-.18.3a13.36 13.36 0 0 0 0 1.39 8.34 8.34 0 0 1-.14 1.94c-.09.33-.28.5-.56.5q-.69 0-.84-1.05-.81-4.14-1-6.21a23.22 23.22 0 0 0-.59-2.86 11.72 11.72 0 0 0-.73-2.29 1.11 1.11 0 0 1-.13-.52.83.83 0 0 1 .18-.55.62.62 0 0 1 .5-.22h.13c.32 0 .59.47.8 1.28s.49 2.46.83 4.92l.37 2.77.16-4c.08-2 .19-3.35.3-4.11a3.66 3.66 0 0 1 .51-1.66zm1.91 1.94a6.52 6.52 0 0 0-.67-.63 1.15 1.15 0 0 0-.45-.27c-.34 0-.59 1.41-.77 4.22-.07 1-.11 1.64-.11 1.94a1.85 1.85 0 0 0 .13.83 3.34 3.34 0 0 0 .53.64 2 2 0 0 0 1.08.66 3 3 0 0 0 .86-.24 2.64 2.64 0 0 0 1.26-1.17 3.28 3.28 0 0 0 .58-1.76 4.36 4.36 0 0 0-.72-1.93 12.14 12.14 0 0 0-1.72-2.29zm5.26-1.19a1.29 1.29 0 0 1 .81-.26.44.44 0 0 1 .18 0 19.7 19.7 0 0 0 2.77.29 10.61 10.61 0 0 1 2.36.22c0 .12-.35.26-1 .42a19.07 19.07 0 0 1-2.35.37 12.85 12.85 0 0 0-2.35.38q-.27.15-.27 1.62a11.7 11.7 0 0 0 .2 2.18c.12.46.2.68.24.68s0 0 0-.08q0-.33.6-.33h.64c1.34.09 2.28.14 2.81.15a6.29 6.29 0 0 1 2.2.27.36.36 0 0 1 0 .11 1.93 1.93 0 0 1-.83.35 9.93 9.93 0 0 1-1.46.29l-2.07.24a7.81 7.81 0 0 1-1.14.22.74.74 0 0 1-.72-.36c-.08-.13-.13-.19-.16-.19s-.11.3-.13.9.05 1.37.16 2.7l.17 1.54h1.37a11.76 11.76 0 0 0 3.8-.9c1-.37 2-.72 3.09-1.07a13.39 13.39 0 0 1 1.93-.53v.19c0 .13-1.25.79-3.76 1.83a10 10 0 0 0-1.52.73 5.08 5.08 0 0 1-1.35.59 12.56 12.56 0 0 1-1.9.53h-.44a4.16 4.16 0 0 1-1.46-.22l-1-.35-.17-3c-.17-2.78-.29-4.63-.38-5.57a8.31 8.31 0 0 0-.33-1.91 4 4 0 0 1-.24-1.32c0-.36.09-.53.26-.53a1 1 0 0 1 .31 0 .82.82 0 0 0 .24 0 1.46 1.46 0 0 0 .89-.18z" transform="translate(-41 -37.08)" />
                            <path d="M310.71 319.65c.12-.18.24-.26.35-.26.41 0 .82.77 1.21 2.31a19.16 19.16 0 0 1 .6 4.84v.72a14.87 14.87 0 0 1-.25 2.4 7.2 7.2 0 0 1-.74 1.72 7.32 7.32 0 0 1-1.24 1.82 1.44 1.44 0 0 1-.88.33q-2.08 0-5.19-7.3c-.25-.6-.42-.9-.5-.9a24.79 24.79 0 0 0-.27 4 22.54 22.54 0 0 1-.35 3.68c-.15.55-.43.83-.84.83s-.61-.13-.61-.38a2.64 2.64 0 0 1 .24-.83 6.12 6.12 0 0 0 .45-1.84c.08-.74.19-2.21.32-4.41v-1.67a8.8 8.8 0 0 0-.15-2.12 3.17 3.17 0 0 1-.11-.63.55.55 0 0 1 .22-.49.5.5 0 0 1 .26-.11c.25 0 .51.18.76.55a3.38 3.38 0 0 1 .54 1.3 23.89 23.89 0 0 0 1.7 4.71 16.45 16.45 0 0 0 1.55 2.7c.72 1.09 1.2 1.68 1.44 1.76a.67.67 0 0 0 .31.07c.35 0 .75-.35 1.21-1a6.78 6.78 0 0 0 .84-2.08 13.69 13.69 0 0 0 .26-2.92 15.59 15.59 0 0 0-1.08-5.76 2.1 2.1 0 0 1-.13-.71.39.39 0 0 1 .08-.33zm6.95 1.54l.82-.15a5.77 5.77 0 0 1 1.08.33q.9.39.9.9a.42.42 0 0 1-.24.44 4.78 4.78 0 0 1-1.21.09h-1.46l.16.9c.17 1.08 1.42 2.72 3.74 4.9a13.51 13.51 0 0 1 1.35 1.4 1.65 1.65 0 0 1 .28 1v.13a2.08 2.08 0 0 1-.75 1.59 4 4 0 0 1-1.84.9 19.43 19.43 0 0 1-3.42.22 22.35 22.35 0 0 1-2.28-.08 1.32 1.32 0 0 1-.84-.32c-.28-.25-.42-.42-.42-.53a4.63 4.63 0 0 1 .86-1.15c.57-.67.9-1 1-1s.2.28.26.83l.07.84h2.35a6.55 6.55 0 0 0 3-.44q.66-.49.66-.66a11 11 0 0 0-1.73-2 24.82 24.82 0 0 1-3.08-3.72 16.24 16.24 0 0 1-1-1.56 1.9 1.9 0 0 1-.26-.86 2 2 0 0 1 .05-.33 1.9 1.9 0 0 1 .65-1.06 2.76 2.76 0 0 1 1.3-.61zm6.56-.57a2.48 2.48 0 0 1 1.25-.24 5.13 5.13 0 0 1 2.4.81c.95.54 1.43 1 1.43 1.36 0 .21-.09.31-.28.31a3.67 3.67 0 0 1-1.06-.31 9.09 9.09 0 0 0-1.74-.52 3.73 3.73 0 0 0-.61-.07c-.15 0-.24 0-.28.1a1 1 0 0 0-.05.43c0 .44.08.69.24.77s.26.66.26 1.78.07 1.63.2 1.65a22 22 0 0 1 3.08.43c1 .21 1.5.4 1.5.56s-.15.3-.44.37a16 16 0 0 1-2.07.25 5.9 5.9 0 0 0-2.36.44 5.19 5.19 0 0 0-.11 1.51v.69a6.72 6.72 0 0 0 .16 1.62c.07.19.25.3.55.33h.15a11.47 11.47 0 0 0 2.22-.28 17.93 17.93 0 0 1 3.46-.53c.39 0 .59.06.59.18s-.19.31-.57.46c-.69.28-1.45.62-2.27 1a5.49 5.49 0 0 0-1.32.76q-.19.24-2.13.24h-.68c-.31 0-.46-.18-.46-.53a.44.44 0 0 0-.49-.5c-.34 0-.54-.08-.61-.22a52.63 52.63 0 0 1-.27-6.41v-3.85a16.63 16.63 0 0 1 .07-2 .93.93 0 0 1 .24-.59z" transform="translate(-41 -37.08)" />
                        </g>
                        <path fill="#fff" d="M198 70.03h276v175.12H198z" id="income-box" className="box" />
                        <g id="income-text" className="box-text">
                            <path d="M259 121.1c.06-.1.23-.15.5-.15h.27a.7.7 0 0 1 .61.33 6.41 6.41 0 0 1 .38 1.52 55.31 55.31 0 0 1 .28 7.26 41.27 41.27 0 0 1-.15 4.59c-.09.55-.27.82-.55.82s-.34-.15-.51-.44a5.25 5.25 0 0 1-.24-2c0-.15 0-1.34.05-3.57v-.33a37.48 37.48 0 0 0-.36-5.21 18.59 18.59 0 0 1-.28-2.73zm11 1.03a.56.56 0 0 1 .48-.28c.49 0 .94.42 1.37 1.27a5.56 5.56 0 0 1 .42 2.42 27.12 27.12 0 0 1-1.35 7.44 17.32 17.32 0 0 1-.91 2.57c-.24.49-.49.73-.76.73a.67.67 0 0 1-.39-.13 3.62 3.62 0 0 1-1.09-1.44c-.36-.73-.86-2-1.51-3.75-.79-2.2-1.22-3.33-1.28-3.39a7.12 7.12 0 0 0-.41 2.24q-.62 4.69-1.13 5.28a1 1 0 0 1-.7.42.53.53 0 0 1-.41-.2.75.75 0 0 1-.16-.5 1.54 1.54 0 0 1 .2-.71 14.83 14.83 0 0 0 .9-3.52 35 35 0 0 0 .53-4.66 7.81 7.81 0 0 1 .37-3 .65.65 0 0 1 .46-.17 1 1 0 0 1 .66.23.65.65 0 0 1 .31.54 2.29 2.29 0 0 0 .29 1.1 4.77 4.77 0 0 1 .39 1.76 23.66 23.66 0 0 0 1 3.89 18.43 18.43 0 0 0 1.4 3.52q.33.51.6.51h.06a13.75 13.75 0 0 0 .82-3.24 44 44 0 0 0 .68-4.55v-.88a4.5 4.5 0 0 0-.48-2 3.32 3.32 0 0 1-.44-1.34.33.33 0 0 1 .08-.16zm8.55-.48a2.8 2.8 0 0 1 .86-.18.93.93 0 0 1 .88.52 3.89 3.89 0 0 1 .26 1.64 2.71 2.71 0 0 1-.2 1.14c-.13.28-.28.42-.46.42s-.54-.37-.64-1.12c0-.43-.21-.64-.5-.64a6.36 6.36 0 0 0-2.15 1.45 9.18 9.18 0 0 0-2 2 5.87 5.87 0 0 0-.6 2.12 3.19 3.19 0 0 0 .2 1.06 6.82 6.82 0 0 0 1.89 3 4 4 0 0 0 2.71 1.11h.37a14.85 14.85 0 0 0 3.53-1.35 13 13 0 0 0 3.16-1.82c.25-.25.43-.37.55-.37s.18.09.18.26a1.54 1.54 0 0 1-.14.53 6.82 6.82 0 0 1-1.77 1.7 5.55 5.55 0 0 1-1.94 1.23 2.59 2.59 0 0 0-1.06.35 8.16 8.16 0 0 1-3.39 1.08 4.08 4.08 0 0 1-2.53-1 10.84 10.84 0 0 1-3.12-5.28 4 4 0 0 1-.05-.7 4.08 4.08 0 0 1 1.41-3.34c.47-.37 1.24-1.08 2.31-2.12a7.1 7.1 0 0 1 2.24-1.69zm10.45 1.69a2.49 2.49 0 0 1 1.6-.81 2.71 2.71 0 0 1 1.55.43 1.29 1.29 0 0 1 .68 1c0 .29-.16.44-.47.44a1.09 1.09 0 0 1-.77-.37 1.22 1.22 0 0 0-.74-.46c-.28 0-.74.34-1.37 1a5.49 5.49 0 0 0-1.65 4 7.11 7.11 0 0 0 .4 2.31 6.24 6.24 0 0 0 1.17 2c.6.72 1 1.09 1.34 1.09a.37.37 0 0 1 .39.24c.06.2.4.31 1 .31a4.24 4.24 0 0 0 2.25-.51 4.57 4.57 0 0 0 1.36-1.16 3.11 3.11 0 0 0 .51-1.44 1.9 1.9 0 0 0 0-.3 5.76 5.76 0 0 0-.54-2.23 6.4 6.4 0 0 0-1.29-2 1.43 1.43 0 0 1-.52-.83c0-.17.08-.25.26-.25a1.49 1.49 0 0 1 .75.31 5.32 5.32 0 0 1 1.75 2.11 6.3 6.3 0 0 1 .69 2.78 3.69 3.69 0 0 1-.33 1.58 4.42 4.42 0 0 1-2 2.27 4.67 4.67 0 0 1-2.44.74 4.84 4.84 0 0 1-3.61-1.82 8.9 8.9 0 0 1-1.56-2.32 7.4 7.4 0 0 1-.57-2.65c0-.5-.05-.82-.05-1a5.56 5.56 0 0 1 .62-2.31 8.53 8.53 0 0 1 1.59-2.15zm9.06-1.69a.58.58 0 0 1 .62-.37q.38 0 .54.57c.11.38.32 1.57.65 3.56a17.93 17.93 0 0 0 1.44 4.9c.63 1.31 1.24 2 1.81 2a.85.85 0 0 0 .71-.49 18.28 18.28 0 0 0 1.39-3.68 28.62 28.62 0 0 0 1.09-4.48c.12-.87.38-1.3.77-1.3a.56.56 0 0 1 .38.16q.33.29.33 3v.19a33 33 0 0 0 1.38 9.86 4.27 4.27 0 0 1 .24 1.06c0 .17-.05.26-.15.26s-.32-.18-.62-.53a9.44 9.44 0 0 1-1.12-3.2 37.83 37.83 0 0 1-.83-5.22l-.11-1.19-.69 2a24 24 0 0 1-1.32 3.52 2 2 0 0 1-1.16 1 2.51 2.51 0 0 1-.68.13 1.59 1.59 0 0 1-.77-.26 5.74 5.74 0 0 1-1.25-1.74 5.54 5.54 0 0 1-.82-1.94c0-.19-.08-.28-.24-.28s-.24.66-.27 2a11.63 11.63 0 0 1-.3 2.83c-.18.71-.42 1.09-.73 1.15h-.27c-.28 0-.41-.13-.41-.37a1.54 1.54 0 0 1 .22-.69 8.25 8.25 0 0 0 .49-2.56c.12-1.33.19-2.75.19-4.26a17.71 17.71 0 0 0-.38-4.53 2.67 2.67 0 0 1-.15-.88 1.1 1.1 0 0 1 .02-.22zm1.59 7.19a.1.1 0 0 0-.11-.11c-.09 0-.14 0-.14.11s.05.11.14.11a.1.1 0 0 0 .11-.11zm13.35-5.36a10.06 10.06 0 0 1 2.48-.27 4.36 4.36 0 0 1 2.27.38c.18.14.27.23.27.26s-.42.12-1.26.13a13.8 13.8 0 0 0-3.36.49l-1.9.48-.08 1.41-.07 1.41h1.08a15.88 15.88 0 0 0 3.1-.44 9.9 9.9 0 0 1 2-.31q.84 0 .84.42s-.13.14-.39.25a4.47 4.47 0 0 1-.89.27l-1.44.38c-.84.22-1.49.39-1.94.53l-2.12.59.2 1.65a24 24 0 0 0 .33 2.46 4.84 4.84 0 0 1 .13 1.06q0 1.23-.66 1.23a.65.65 0 0 1-.37-.12.33.33 0 0 1-.18-.27c0-.4-.06-.61-.06-.64-.06-.22-.16-1-.29-2.41s-.23-2.58-.29-3.58a12.34 12.34 0 0 0-.5-3.34 4.53 4.53 0 0 1-.22-1.14c0-.58.31-.86.92-.86a5.18 5.18 0 0 1 .53 0 3.56 3.56 0 0 0 .7 0 4.55 4.55 0 0 0 1.17-.02zm5.52 9.17a11.66 11.66 0 0 1 2.29-.81q.15 0 .15.06c0 .24-.77.79-2.32 1.65a20.81 20.81 0 0 1-3.86 1.78 3.39 3.39 0 0 1-1 .2c-.51 0-.77-.28-.77-.83a.57.57 0 0 1 .29-.57 8.73 8.73 0 0 1 1.53-.38 15 15 0 0 0 3.69-1.1z" transform="translate(-41 -37.08)" />
                        </g>
                        <path id="arrow-asset-1" className="arrow" d="M136.07 312.74A315.39 315.39 0 0 1 241 199.67l5.08 7.94L261 182l-30.7 1 5.3 8.27a325.56 325.56 0 0 0-108.3 116.66A339.53 339.53 0 0 0 86 453.71c-2.17 44 4.7 87.43 19.87 125.57 15.65 39.31 39.24 72 70.12 97.27a18.49 18.49 0 1 0 5.68-8.27c-29.23-24.11-51.61-55.26-66.51-92.7C100.53 538.76 93.89 496.79 96 454.2a329.48 329.48 0 0 1 40.07-141.46zM193.5 674a8.5 8.5 0 1 1-8.5 8.5 8.51 8.51 0 0 1 8.5-8.5z" transform="translate(-41 -37.08)" />
                        <path id="arrow-asset-2" className="arrow" d="M436.36 301.29c-15-41-38.57-75.19-70.15-101.67l-6.42 7.66c30.21 25.34 52.82 58.13 67.21 97.45 13.6 37.21 19 79.36 15.72 121.87a329.64 329.64 0 0 1-44.08 140.27 315.5 315.5 0 0 1-108.09 110l-4.86-8.07L270 694l30.72-.11-5.06-8.42a325.53 325.53 0 0 0 111.58-113.55 339.68 339.68 0 0 0 45.42-144.54c3.42-43.93-2.21-87.53-16.3-126.09z" transform="translate(-41 -37.08)" />
                        <path id="arrow-middle-class" className="arrow" d="M660 395l-24-14.62V390H519.48a9.49 9.49 0 0 0-9.48 9.48v297.37l-265.32-501.8a9.45 9.45 0 0 0-8.38-5.05H75v10h161l266.14 503.38a9.33 9.33 0 0 0 8.3 5.06 9.61 9.61 0 0 0 2.36-.3 9.33 9.33 0 0 0 7.2-9.2V400h116v9.62z" transform="translate(-41 -37.08)" />
                        <g id="arrow-job" className="arrow" transform="translate(35,150)">
                            <path id="arrow-job-path" className="path" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="10" d="M0 5h164l277 201h120" />
                            {/* <path id="arrow-job-head" className="head" d="M0 15l24-15-24-15v30z"/> */}
                        </g>
                        <path id="arrow-middle-class-path" className="path" d="M34 157.92h164l266.45 503a5.1 5.1 0 0 0 9.61-2.37l.94-299.63h120" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="10" />
                        <path id="arrow-asset-2-path" className="path" d="M161 605.92c-182-119-96-412 47-488" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="10" />
                        <path id="arrow-asset-1-path" className="path" d="M307.26 106.8C482.93 234.92 382 523.18 235.33 591.75" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="10" />
                    </svg>

                </Columns.Column>
            </Columns>
        </Section>
    );
}

export default CashflowPatterns