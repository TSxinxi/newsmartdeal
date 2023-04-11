import {PageHeader, Text} from './Text';

export function NotFound({type = 'page'}) {
  const heading = `We’ve lost this ${type}`;
  const description = `We couldn’t find the ${type} you’re looking for.`;

  return (
    <>
      <PageHeader heading={heading}>
        <Text width="narrow" as="p">
          {description}
        </Text>
      </PageHeader>
    </>
  );
}
