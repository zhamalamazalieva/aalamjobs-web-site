import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { WithContext as ReactTags } from "react-tag-input"

const AchievementsInfo = ({skills, setSkills, achievements, setAchievements, portfolio, setPortfolio}) => {
	const { t } = useTranslation()

	//KEYCODES
	const KeyCodes = {  enter: 13, next: 9 }
	const delimiters = [KeyCodes.enter, KeyCodes.next]

	//REACT_INPUT_TAGS_SKILLS
	const [skillsTags, setSkillsTags] = useState([])
	const handleAdditionSkills = (tag) => {
		setSkillsTags((reqTags) => [...reqTags, tag])
	}
	const handleDeleteSkills = (i) => {
		setSkillsTags((skillsTags) => skillsTags.filter((t, index) => index !== i))
	}
	const handleDragSkills = (tag, currPos, newPos) => {
		const newSkillsTags = skillsTags.slice()
		newSkillsTags.splice(currPos, 1)
		newSkillsTags.splice(newPos, 0, tag)
		setSkillsTags(newSkillsTags)
	}

	//REACT_INPUT_TAGS_ACHIEVEMENTS
	const [achievementsTags, setAchievementsTags] = useState([])
	const handleAdditionAchievements = (tag) => {
		setAchievementsTags((achievementsTags) => [...achievementsTags, tag])
	}
	const handleDeleteAchievements = (i) => {
		setAchievementsTags((achievementsTags) =>
			achievementsTags.filter((t, index) => index !== i)
		)
	}
	const handleDragAchievements = (tag, currPos, newPos) => {
		const newAchievementsTags = achievementsTags.slice()
		newAchievementsTags.splice(currPos, 1)
		newAchievementsTags.splice(newPos, 0, tag)
		setAchievementsTags(newAchievementsTags)
	}

	//REACT_INPUT_TAGS_PORTFOLIO
	const [portfolioTags, setPortfolioTags] = useState([])
	const handleAdditionPortfolio = (tag) => {
		setPortfolioTags((portfolioTags) => [...portfolioTags, tag])
	}
	const handleDeletePortfolio = (i) => {
		setPortfolioTags((portfolioTags) =>
			portfolioTags.filter((t, index) => index !== i)
		)
	}
	const handleDragPortfolio = (tag, currPos, newPos) => {
		const newPortfolioTags = portfolioTags.slice()
		newPortfolioTags.splice(currPos, 1)
		newPortfolioTags.splice(newPos, 0, tag)
		setPortfolioTags(newPortfolioTags)
	}

	useEffect(() => {
		setPortfolio(portfolioTags.map((tag) => tag.text))
		setAchievements(achievementsTags.map((tag) => tag.text))
		setSkills(skillsTags.map((tag) => tag.text))

	}, [portfolioTags, skillsTags, achievementsTags])
	return (
		<div>
			<div className="application__section d-flex flex-column ">
				<h3 className="myText--large mb-2 d-center">
					{t("cv.achievementsAndSkills")}
				</h3>
				<FormLabel>Please mention all your skills (optional)</FormLabel>
				<ReactTags
					className="m-width"
					tags={skillsTags}
					handleDelete={handleDeleteSkills}
					handleAddition={handleAdditionSkills}
					handleDrag={handleDragSkills}
					placeholder={t("pressEnterToAddTag")}
					inputFieldPosition="top"
					delimiters={delimiters}
					autofocus={false}

				/>
				<FormLabel className="mt-3">
					Please mention your achievements: awards, certificates, recognition
					letters (optional)
				</FormLabel>

				<ReactTags
					tags={achievementsTags}
					handleDelete={handleDeleteAchievements}
					handleAddition={handleAdditionAchievements}
					handleDrag={handleDragAchievements}
					placeholder={t("pressEnterToAddTag")}
					inputFieldPosition="top"
					delimiters={delimiters}
					autofocus={false}

				/>
				<FormLabel className="mt-3">
					Links related to your work experience (optional)
				</FormLabel>
				<ReactTags
					tags={portfolioTags}
					handleDelete={handleDeletePortfolio}
					handleAddition={handleAdditionPortfolio}
					handleDrag={handleDragPortfolio}
					placeholder={t("pressEnterToAddTag")}
					inputFieldPosition="top"
					delimiters={delimiters}
					autofocus={false}
				/>
			</div>
		</div>
	)
}

export default AchievementsInfo
