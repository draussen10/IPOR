import {type FC, memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Card} from '@/shared/ui/Card';
import {Text} from '@/shared/ui/Text';
import {HStack, VStack} from '@/shared/ui/Stack';
import {StarRating} from '@/shared/ui/StarRating';
import {Input} from '@/shared/ui/Input';
import {Modal} from '@/shared/ui/Modal';
import {Button, ButtonSize, ButtonTheme} from '@/shared/ui/Button';
import {BrowserView, MobileView} from 'react-device-detect';
import {Drawer} from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starCount: number) => void
    onAccept?: (starCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
    const {t} = useTranslation();

    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Enter feedback')}
                label={'Оставьте отзыв'}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={className} max>
            <VStack justify={'center'} align={'center'} gap={'8'} max >
                <Text title={starsCount ? t('Ваша оценка') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap={'32'}>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>{t('Cancel')}</Button>
                            <Button onClick={acceptHandler} disabled={!feedback} >{t('Accept')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap={'32'}>
                        {modalContent}
                        <Button
                            onClick={acceptHandler}
                            disabled={!feedback}
                            size={ButtonSize.L}
                            fullWidth
                        >
                            {t('Accept')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
