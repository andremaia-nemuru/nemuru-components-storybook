import React from 'react';
import SingleLinearStatBar from '../components/SingleLinearStatBar';
import { formatAmountForDisplay } from '../utils';
import './main.css';
import Wrapper from './shared/Wrapper';

export default {
    title: 'Nemuru-components/SingleLinearStatBar',
    component: Template,
    argTypes: {
        filterMetrics: {
            control: 'select',
            options: ['AMOUNT', 'OPERATIONS'],
        },
        ChannelType: {
            control: 'select',
            options: [
                'store',
                'web',
                'app',
                'tpv',
                'social_media',
                'phone',
                'marketplace',
            ],
        },
    },
};

const Template = (args) => {
    const {
        maximumAmountValueForFilter,
        maximumOperationsNumberForFilter,
        Location,
        AgentName,
        AgentOperationsNumber,
        AgentAmountValue,
        linearStatBarForChannel,
        linearStatBarForAgent,
        ChannelDescription,
        ChannelType,
        ChannelAmountValue,
        ChannelOperationsNumber,
    } = args;
    args.i = 0;
    args.maximumValueForFilter = {
        amount: maximumAmountValueForFilter,
        number: maximumOperationsNumberForFilter,
    };
    args.formatAmountForDisplay = formatAmountForDisplay;
    args.agent = {
        agentLocation: Location,
        agentName: AgentName,
        amount: AgentAmountValue,
        loanStatus: 'status_initial',
        number: AgentOperationsNumber,
    };
    args.filterSalesChannel = '';

    if (linearStatBarForAgent) {
        args.amountToShowPerAgent = {
            agentLocation: Location,
            agentName: AgentName,
            amount: AgentAmountValue,
            loanStatus: 'status_initial',
            number: AgentOperationsNumber,
        };
        args.maximumReferenceForAgents = {
            agentLocation: Location,
            agentName: AgentName,
            amount: maximumAmountValueForFilter,
            loanStatus: 'status_initial',
            number: maximumOperationsNumberForFilter,
        };
    }
    if (linearStatBarForChannel) {
        args.amountToShowPerChannel = {
            channelType: ChannelType,
            channelDescription: ChannelDescription,
            amount: ChannelAmountValue,
            loanStatus: 'status_initial',
            number: ChannelOperationsNumber,
        };
        args.maximumReferenceForChannel = {
            amount: maximumAmountValueForFilter,
            channelDescription: ChannelDescription,
            channelType: ChannelType,
            number: maximumOperationsNumberForFilter,
        };
    }
    args.maximumValueForSelectedAgent = {
        amount: 2444515.64,
        channelDescription: 'Tienda fisica',
        channelType: 'store',
        number: 317,
    };
    args.isScreenXs = false;

    return (
        <Wrapper maxWidth={args.isScreenXs ? '350px' : '600px'}>
            <SingleLinearStatBar {...args} />
        </Wrapper>
    );
};
export const SingleLinearStatBarForAgent = Template.bind({});
SingleLinearStatBarForAgent.args = {
    linearStatBarForAgent: true,
    maximumAmountValueForFilter: 2500000,
    maximumOperationsNumberForFilter: 387,
    filterMetrics: 'AMOUNT',
    Location: 'Tienda fisica',
    AgentName: 'Manolo Aguirre',
    AgentAmountValue: 1950678,
    AgentOperationsNumber: 259,
};
export const SingleLinearStatBarForChannel = Template.bind({});
SingleLinearStatBarForChannel.args = {
    linearStatBarForChannel: true,
    maximumAmountValueForFilter: 2500000,
    maximumOperationsNumberForFilter: 387,
    filterMetrics: 'AMOUNT',
    ChannelDescription: 'Tienda fisica',
    ChannelType: 'store',
    ChannelAmountValue: 1950678,
    ChannelOperationsNumber: 259,
};
