import React from "react";
import { s } from "./";

export default function LogoArtwork(){

	const bigBoneMask = { 
		"-webkit-mask-image": `url("/assets/2d/landing/V-big-bone-mask.png")`,
		"-webkit-mask-size": "100% 100%",
		"-moz-mask-image": `url("/assets/2d/landing/V-big-bone-mask.png")`,
		"-moz-mask-size": "100% 100%",
		"mask-image": `url("/assets/2d/landing/V-big-bone-mask.png")`,
		"mask-size": "100% 100%"
	};

	const topBonesMask = { 
		"-webkit-mask-image": `url("/assets/2d/landing/V-top-bones-mask.png")`,
		"-webkit-mask-size": "100% 100%",
		"-moz-mask-image": `url("/assets/2d/landing/V-top-bones-mask.png")`,
		"-moz-mask-size": "100% 100%",
		"mask-image": `url("/assets/2d/landing/V-top-bones-mask.png")`,
		"mask-size": "100% 100%"
	};

	const firstRingMask = { 
		"-webkit-mask-image": `url("/assets/2d/landing/V-first-ring-mask.png")`,
		"-webkit-mask-size": "100% 100%",
		"-moz-mask-image": `url("/assets/2d/landing/V-first-ring-mask.png")`,
		"-moz-mask-size": "100% 100%",
		"mask-image": `url("/assets/2d/landing/V-first-ring-mask.png")`,
		"mask-size": "100% 100%"
	};

	const bottomRingsMask = { 
		"-webkit-mask-image": `url("/assets/2d/landing/V-bottom-rings-mask.png")`,
		"-webkit-mask-size": "100% 100%",
		"-moz-mask-image": `url("/assets/2d/landing/V-bottom-rings-mask.png")`,
		"-moz-mask-size": "100% 100%",
		"mask-image": `url("/assets/2d/landing/V-bottom-rings-mask.png")`,
		"mask-size": "100% 100%"
	};

	const eyeMask = { 
		"-webkit-mask-image": `url("/assets/2d/landing/V-eye-mask.png")`,
		"-webkit-mask-size": "100% 100%",
		"-moz-mask-image": `url("/assets/2d/landing/V-eye-mask.png")`,
		"-moz-mask-size": "100% 100%",
		"mask-image": `url("/assets/2d/landing/V-eye-mask.png")`,
		"mask-size": "100% 100%"
	};

	return (
		<div className={ s.wrapper }>
			<img 
				className={ s.logo }
				src="/assets/2d/landing/V-big-bone.jpg" 
				alt="Vikings Logo; an ornate 'V' carved out of wood." 
				style={ bigBoneMask }
			/>
			<img 
				className={ s.logo }
				src="/assets/2d/landing/V-top-bones.jpg" 
				alt="Vikings Logo; an ornate 'V' carved out of wood." 
				style={ topBonesMask }
			/>
			<img 
				className={ s.logo }
				src="/assets/2d/landing/V-first-ring.jpg" 
				alt="Vikings Logo; an ornate 'V' carved out of wood." 
				style={ firstRingMask }
			/>
			<img 
				className={ s.logo }
				src="/assets/2d/landing/V-bottom-rings.jpg" 
				alt="Vikings Logo; an ornate 'V' carved out of wood." 
				style={ bottomRingsMask }
			/>
			<img 
				className={ s.logo }
				src="/assets/2d/landing/V-eye.jpg" 
				alt="Vikings Logo; an ornate 'V' carved out of wood." 
				style={ eyeMask }
			/>
		</div>
	);
}// LogoArtwork
