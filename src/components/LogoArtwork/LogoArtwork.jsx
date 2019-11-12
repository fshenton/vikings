import React from "react";
import { s } from "./";

export default function LogoArtwork(){

	// using masks to reduce image size 

	const boneMasks = {
		bigBone: "/assets/2d/landing/V-big-bone-mask.png",
		topBones: "/assets/2d/landing/V-top-bones-mask.png",
		firstRing: "/assets/2d/landing/V-first-ring-mask.png",
		bottomRings: "/assets/2d/landing/V-bottom-rings-mask.png",
		eye: "/assets/2d/landing/V-eye-mask.png"
	};

	const bigBoneMask = { 
		"WebkitMaskImage": `url(${boneMasks["bigBone"]})`,
		"WebkitMaskSize": "100% 100%",
		"MozMaskImage": `url(${boneMasks["bigBone"]})`,
		"MozMaskSize": "100% 100%",
		"maskImage": `url(${boneMasks["bigBone"]})`,
		"maskSize": "100% 100%"
	};

	const topBonesMask = { 
		"WebkitMaskImage": `url(${boneMasks["topBones"]})`,
		"WebkitMaskSize": "100% 100%",
		"MozMaskImage": `url(${boneMasks["topBones"]})`,
		"MozMaskSize": "100% 100%",
		"maskImage": `url(${boneMasks["topBones"]})`,
		"maskSize": "100% 100%"
	};

	const firstRingMask = { 
		"WebkitMaskImage": `url(${boneMasks["firstRing"]})`,
		"WebkitMaskSize": "100% 100%",
		"MozMaskImage": `url(${boneMasks["firstRing"]})`,
		"MozMaskSize": "100% 100%",
		"maskImage": `url(${boneMasks["firstRing"]})`,
		"maskSize": "100% 100%"
	};

	const bottomRingsMask = { 
		"WebkitMaskImage": `url(${boneMasks["bottomRings"]})`,
		"WebkitMaskSize": "100% 100%",
		"MozMaskImage": `url(${boneMasks["bottomRings"]})`,
		"MozMaskSize": "100% 100%",
		"maskImage": `url(${boneMasks["bottomRings"]})`,
		"maskSize": "100% 100%"
	};

	const eyeMask = { 
		"WebkitMaskImage": `url(${boneMasks["eye"]})`,
		"WebkitMaskSize": "100% 100%",
		"MozMaskImage": `url(${boneMasks["eye"]})`,
		"MozMaskSize": "100% 100%",
		"maskImage": `url(${boneMasks["eye"]})`,
		"maskSize": "100% 100%"
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
