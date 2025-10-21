export function HeroCard({ secretIdentity, name, picture, universe, id }) {
	return (
		<Card>
			<InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
				<Box>
					<Caption as="div" color={Colors.GRAY_600}>
						{secretIdentity}
					</Caption>
					<Box mb={Spaces.ONE}>
						<HeadingTwo>{name}</HeadingTwo>
					</Box>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Universo:</strong> {universe}
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Nota atual:</strong> -
					</Description>
				</Box>
				<HeroAvatar src={picture} />
			</InformationGrid>
			<Box width="87px">
				<ButtonLink>Ver Mais</ButtonLink>
			</Box>
		</Card>                           
	);
}