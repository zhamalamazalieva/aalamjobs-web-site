import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { WithContext as ReactTags } from "react-tag-input"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			minWidth: "100%",
		},
	},
}))
const AchievementsInfo = () => {
	const classes = useStyles()
	const { t } = useTranslation()

	//KEYCODES
	const KeyCodes = { dot: 190, enter: 13, next: 9 }
	const delimiters = [KeyCodes.enter, KeyCodes.dot, KeyCodes.next]

	//REACT_INPUT_TAGS_SKILLS
	const [skillsTags, setSkillsTags] = useState([])
	const skills = skillsTags.map((tag) => tag.text)
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
	const achievements = achievementsTags.map((tag) => tag.text)
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
	const portfolio = portfolioTags.map((tag) => tag.text)
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
	return (
		<div>
			<div className="application__section d-flex flex-column ">
				<h3 className="myText--large mb-2 d-center">
					{t("cv.AchievementsAndLinks")}
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
				/>
			</div>
		</div>
	)
}

export default AchievementsInfo
