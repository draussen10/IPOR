import {type FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './AddCommentForm.m.scss';
import {Input} from 'shared/ui/Input/Input';
import {Button} from 'shared/ui/Button/Button';
import {useSelector} from 'react-redux';
import {
    getAddCommentFormText
} from 'features/addCommentForm/model/selectors/addCommentFormSelectors';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {addCommentFormActions, addCommentFormReducer} from '../../model/slice/addCommentFormSlice';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';

interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {className, onSendComment} = props;
    const text = useSelector(getAddCommentFormText);

    useReducerManager(reducers);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onCommentTextChange('');
        onSendComment(text || '');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <div className={classNames(styles.addCommentForm, {}, [className])}>
            <Input
                className={styles.input}
                placeholder={t('addCommentFormPlaceholder')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button onClick={onSendHandler}>
                {t('send')}
            </Button>
        </div>
    );
});

export default AddCommentForm;
