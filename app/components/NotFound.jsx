import {PageHeader, Text} from './Text';
import { getShopAddress } from '~/lib/P_Variable';

export function NotFound({type = 'page'}) {
  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
  if (canUseDOM) {
    window.open('https://' + getShopAddress(), '_self')
  }
  const heading = '';
  const description = '';
  // const heading = `We’ve lost this ${type}`;
  // const description = `We couldn’t find the ${type} you’re looking for.`;

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
