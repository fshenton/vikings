import React from "react";
import { s } from "./";

export default function LogoArtwork(){

	// using masks to reduce image size 
	// there's a nicer way to do this, one to come back to later

	const boneMasks = {
		bigBone: "/assets/2d/landing/V-big-bone-mask.png",
		topBones: "/assets/2d/landing/V-top-bones-mask.png",
		firstRing: "/assets/2d/landing/V-top-ring-mask.png",
		bottomRings: "/assets/2d/landing/V-bottom-rings-mask.png",
		eye: "/assets/2d/landing/V-eye-mask.png"
	};

	const bigBoneMask = { 
		"WebkitMaskImage": `url(${boneMasks["bigBone"]})`,
		"MozMaskImage": `url(${boneMasks["bigBone"]})`,
		"maskImage": `url(${boneMasks["bigBone"]})`
	};

	const topBonesMask = { 
		"WebkitMaskImage": `url(${boneMasks["topBones"]})`,
		"MozMaskImage": `url(${boneMasks["topBones"]})`,
		"maskImage": `url(${boneMasks["topBones"]})`
	};

	const firstRingMask = { 
		"WebkitMaskImage": `url(${boneMasks["firstRing"]})`,
		"MozMaskImage": `url(${boneMasks["firstRing"]})`,
		"maskImage": `url(${boneMasks["firstRing"]})`
	};

	const bottomRingsMask = { 
		"WebkitMaskImage": `url(${boneMasks["bottomRings"]})`,
		"MozMaskImage": `url(${boneMasks["bottomRings"]})`,
		"maskImage": `url(${boneMasks["bottomRings"]})`
	};

	const eyeMask = { 
		"WebkitMaskImage": `url(${boneMasks["eye"]})`,
		"MozMaskImage": `url(${boneMasks["eye"]})`,
		"maskImage": `url(${boneMasks["eye"]})`
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
				src="/assets/2d/landing/V-top-ring.jpg" 
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
